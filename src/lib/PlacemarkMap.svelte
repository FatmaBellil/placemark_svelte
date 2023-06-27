<!-- noch to fix-->
<script>
    // @ts-nocheck
    
        import "leaflet/dist/leaflet.css";
        import { LeafletMap } from "../services/leaflet-map";
        import { onMount } from "svelte";
        import { placemarkService } from "../services/placemark-service";
        import { latestPlacemark } from "../stores";
    
        const mapConfig = {
            location: { lat: 52.160858, lng: -7.15242 },
            zoom: 8,
            minZoom: 1
        };
        let map = null;
    
        onMount(async () => {
            map = new LeafletMap("placemark-map", mapConfig);
            map.showZoomControl();
            map.addLayerGroup("Placemarks");
            map.showLayerControl();
            const placemarks = await placemarkService.getPlaceamrks();
            placemarks.forEach((placemark) => {
                addPlacemarkMarker(map, placemark);
            });
        });
    
        function addPlacemarkMarker(map, placemark) {
            const placemarkStr = `${placemark.candidate.firstName} ${placemark.candidate.lastName} €${placemark.amount.toString()}`;
            map.addMarker({ lat: placemark.lat, lng: placemark.lng }, placemarkStr, "placemarks");
            map.moveTo(8, { lat: placemark.lat, lng: placemark.lng });
    
        }
    
        latestPlacemark.subscribe(async (placemark) => {
            if (placemark && map) {
                const candidate = await placemarkService.getCandidate(placemark.candidate);
                placemark.candidate = candidate;
                addPlacemarkMarker(map, placemark);
            }
        });
    
    </script>
    
    <div class="box" id="placemark-map" style="height:800px" />
    