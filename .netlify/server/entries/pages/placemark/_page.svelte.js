import { c as create_ssr_component, d as add_attribute, b as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import { P as PlacemarkMap } from "../../../chunks/PlacemarkMap.js";
const Coordinates = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { latitude = 0 } = $$props;
  let { longitude = 0 } = $$props;
  if ($$props.latitude === void 0 && $$bindings.latitude && latitude !== void 0)
    $$bindings.latitude(latitude);
  if ($$props.longitude === void 0 && $$bindings.longitude && longitude !== void 0)
    $$bindings.longitude(longitude);
  return `<div class="box field is-horizontal"><div class="field-label is-normal" data-svelte-h="svelte-l3r2ee"><label for="latitude" class="label">Latitude</label></div> <div class="field-body"><div class="field"><p class="control is-expanded"><input id="latitude" class="input" type="float"${add_attribute("value", latitude, 0)}></p></div> <div class="field-label is-normal" data-svelte-h="svelte-1ewt7se"><label for="longitude" class="label">longitude</label></div> <div class="field"><p class="control is-expanded "><input id="longitude" class="input" type="float"${add_attribute("value", longitude, 0)}></p></div></div></div>`;
});
const AddPlacemarkForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let CategoryList = [];
  let name = "";
  let description = "";
  let latitude = 49.013432;
  let longitude = 12.1016;
  let message = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<form><div class="columns is-multiline is-mobile"><div class="field column is-one-quarter"><input class="input" id="name" name="name" placeholder="placemark" type="string"${add_attribute("value", name, 0)}></div> <div class="field column"><input class="input" id="description" name="description" placeholder="description" type="string"${add_attribute("value", description, 0)}></div></div> <div class="field"><div class="select"><select>${each(CategoryList, (category) => {
      return `<option${add_attribute("value", category.name, 0)}>${escape(category.name)}</option>`;
    })}</select></div></div> ${validate_component(Coordinates, "Coordinates").$$render(
      $$result,
      { latitude, longitude },
      {
        latitude: ($$value) => {
          latitude = $$value;
          $$settled = false;
        },
        longitude: ($$value) => {
          longitude = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="field" data-svelte-h="svelte-8ex2qb"><div class="control"><button class="button is-link is-light">Add</button></div></div> <div class="box">${escape(message)}</div></form>`;
  } while (!$$settled);
  return $$rendered;
});
const PlacemarkList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let placemarkList = [];
  return `${placemarkList.length > 0 ? `<table class="table is-fullwidth"><thead data-svelte-h="svelte-1gzk76k"><th style="text-align: center;">Title</th> <th style="text-align: center;">Description</th> <th style="text-align: center;">Latitude</th> <th style="text-align: center;">Longitude</th> <th style="text-align: center;">Details</th> <th style="text-align: center;">Delete</th></thead> <tbody>${each(placemarkList, (placemark) => {
    return `<tr><td>${escape(placemark.name)}</td> <td>${escape(placemark.description)}</td> <td>${escape(placemark.latitude)}</td> <td>${escape(placemark.longitude)}</td> <td><button><a${add_attribute("href", `/placemark/${placemark._id}`, 0)}><i class="fas fa-edit"></i></a> </button></td> <td><form><button type="submit" name="deleteplacemark" data-svelte-h="svelte-210lgr"><i class="fas fa-trash"></i></button> </form></td> </tr>`;
  })}</tbody></table> ${``}` : `<h1 class="title" data-svelte-h="svelte-qnsh7j">there is no placemarks yet</h1>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} <div class="box has-text-centered"><h1 class="title is-4" data-svelte-h="svelte-mw26zm">All Placemarks:</h1> ${validate_component(PlacemarkList, "PlacemarkList").$$render($$result, {}, {}, {})}</div> <div class="box has-text-centered"><h1 class="title is-4" data-svelte-h="svelte-19n7766">Add a new Placemark:</h1> ${validate_component(AddPlacemarkForm, "AddPlacemarkForm").$$render($$result, {}, {}, {})}</div> ${validate_component(PlacemarkMap, "PlacemarkMap").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
