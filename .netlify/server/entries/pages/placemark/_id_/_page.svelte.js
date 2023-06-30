import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { H as Header } from "../../../../chunks/Header.js";
import { M as MainNavigator } from "../../../../chunks/MainNavigator.js";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { placemark } = $$props;
  let { temperature } = $$props;
  let { weatherMain } = $$props;
  if ($$props.placemark === void 0 && $$bindings.placemark && placemark !== void 0)
    $$bindings.placemark(placemark);
  if ($$props.temperature === void 0 && $$bindings.temperature && temperature !== void 0)
    $$bindings.temperature(temperature);
  if ($$props.weatherMain === void 0 && $$bindings.weatherMain && weatherMain !== void 0)
    $$bindings.weatherMain(weatherMain);
  $$unsubscribe_page();
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} ${placemark ? `<table class="table is-fullwidth"><thead data-svelte-h="svelte-1mk9u4f"><tr><th>Name</th> <th>Description</th> <th>Latitude</th> <th>Longitude</th> <th>temperature</th> <th>Weather</th></tr></thead> <tbody><tr><td>${escape(placemark.name)}</td> <td>${escape(placemark.description)}</td> <td>${escape(placemark.latitude)}</td> <td>${escape(placemark.longitude)}</td> <td>${escape(temperature)}</td> <td>${escape(weatherMain)}</td></tr></tbody></table>` : `<p data-svelte-h="svelte-qdsr2u">Loading...</p>`}`;
});
export {
  Page as default
};
