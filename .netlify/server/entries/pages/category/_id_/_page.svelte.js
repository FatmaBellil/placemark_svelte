import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, b as each } from "../../../../chunks/ssr.js";
import { H as Header } from "../../../../chunks/Header.js";
import { M as MainNavigator } from "../../../../chunks/MainNavigator.js";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { category } = $$props;
  let { placemarks = [] } = $$props;
  let { hasPlacemarks = false } = $$props;
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.placemarks === void 0 && $$bindings.placemarks && placemarks !== void 0)
    $$bindings.placemarks(placemarks);
  if ($$props.hasPlacemarks === void 0 && $$bindings.hasPlacemarks && hasPlacemarks !== void 0)
    $$bindings.hasPlacemarks(hasPlacemarks);
  $$unsubscribe_page();
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} ${hasPlacemarks ? `<h1 class="title">All placemarks of the category ${escape(category.name)}:</h1> <table class="table is-fullwidth"><thead data-svelte-h="svelte-8dy4ul"><tr><th>Name</th> <th>Description</th> <th>Latitude</th> <th>Longitude</th></tr></thead> <tbody>${each(placemarks, (placemark) => {
    return `<tr><td>${escape(placemark.name)}</td> <td>${escape(placemark.description)}</td> <td>${escape(placemark.latitude)}</td> <td>${escape(placemark.longitude)}</td> </tr>`;
  })}</tbody></table>` : `<h1 class="title" data-svelte-h="svelte-auaypa">the category doesn&#39;t have any placemark</h1>`}`;
});
export {
  Page as default
};
