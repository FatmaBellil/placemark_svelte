<script>
// @ts-nocheck
    
    import "leaflet/dist/leaflet.css";
    import { onMount } from "svelte";
    import { afterUpdate } from 'svelte';
    import {latestPlacemark} from "../stores"
    import { placemarkService } from "../services/placemark-service";

  
    let map;
    let placemarks = [];
  
    onMount(async () => {
      if (typeof window !== 'undefined') {
        const { LeafletMap } = await import("../services/leaflet-map");
  
        map = new LeafletMap("placemark-map", {
          location: { lat: 49.0144, lng: 12.1016 },
          zoom: 5,
          minZoom: 1,
        });
  
        map.showZoomControl();
        map.addLayerGroup("Placemarks");
        map.showLayerControl();
  
        const categoryList = await placemarkService.getCategories();
  
        for (let i = 0; i < categoryList.length; i += 1) {
          const data = await placemarkService.getPlacemarks(categoryList[i]._id);
          placemarks.push(...data);
        }
  
        placemarks.forEach((placemark) => {
          addPlacemarkMarker(map, placemark);
        });
      }
    });
  
    afterUpdate(() => {
      if (map) {
        placemarks.forEach((placemark) => {
          addPlacemarkMarker(map, placemark);
        });
      }
    });
  
    function addPlacemarkMarker(map, placemark) {
      const placemarkStr = `${placemark.name}`;
      map.addMarker(
        { lat: placemark.latitude, lng: placemark.longitude, id: placemark._id },
        placemarkStr,
        "placemarks"
      );
      map.moveTo(5, { lat: placemark.latitude, lng: placemark.longitude });
    }

    latestPlacemark.subscribe(async (placemark) => {
        if (placemark && map) {
            addPlacemarkMarker(map, placemark);
        }
    });
  </script>
  
  <div class="box" id="placemark-map" style="height: 800px;"></div>
  