import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { H as Header } from "../../chunks/Header.js";
import { W as WelcomeNavigator } from "../../chunks/WelcomeNavigator.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(WelcomeNavigator, "WelcomeNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} <div class="columns is-vcentered content" data-svelte-h="svelte-1dx9pan"><div class="column has-text-centered"><img width="300" src="/globe.png" alt="globe"></div> <div class="column has-text-centered"><h1 class="title">Welcome to placemark services</h1> <p>Use our services for free!</p> <p>Without any limitations!</p></div></div>`;
});
export {
  Page as default
};
