import { c as create_ssr_component } from "./ssr.js";
const MainNavigator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="box has-text-centered columns m-2" data-svelte-h="svelte-aucd2s"><a href="/category" class="column"><i class="fa fa-home fa-3x" style="color:rgb(153, 196, 74)"></i></a> <a href="/placemark" class="column "><i class="fas fa-th-list fa-3x" style="color:rgb(63, 122, 139)"></i></a> <a href="/map" class="column "><i class="fas fa-map-marked-alt fa-3x" style="color:rgb(102, 153, 255)"></i></a> <a href="/charts" class="column is-2 mx-2"><i class="fas fa-chart-line fa-3x" style="color:rgb(149, 93, 176)"></i></a> <a href="/logout" class="column"><i class="fas fa-sign-out-alt fa-3x" style="color:rgb(156, 70, 128)"></i></a></div>`;
});
export {
  MainNavigator as M
};
