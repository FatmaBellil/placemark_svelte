import { c as create_ssr_component } from "./ssr.js";
/* empty css         */import { l as latestPlacemark } from "./stores2.js";
function addPlacemarkMarker(map, placemark) {
  const placemarkStr = `${placemark.name}`;
  map.addMarker(
    {
      lat: placemark.latitude,
      lng: placemark.longitude,
      id: placemark._id
    },
    placemarkStr,
    "placemarks"
  );
  map.moveTo(5, {
    lat: placemark.latitude,
    lng: placemark.longitude
  });
}
const PlacemarkMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let map;
  latestPlacemark.subscribe(async (placemark) => {
    if (placemark && map) {
      addPlacemarkMarker(map, placemark);
    }
  });
  return `<div class="box" id="placemark-map" style="height: 800px;"></div>`;
});
export {
  PlacemarkMap as P
};
