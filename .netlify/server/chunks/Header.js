import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "./ssr.js";
import { u as user } from "./stores2.js";
const TitleBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { title = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$unsubscribe_user();
  return `<div class="box has-text-centered columns m-2"><div class="column" data-svelte-h="svelte-wu02jd"><img src="/placemark.png" width="60" alt="placemark"></div> <div class="column "><div class="title is-5">${escape(title)}</div></div> <div class="column"><i class="fa fa-user fa-3x"></i> ${$user.email ? `<div class="is-size-7">${escape($user.email)}</div>` : `<div class="is-size-7" data-svelte-h="svelte-1cnus4l">sign up or log in</div>`}</div></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="columns is-vcentered "><div class="column is-half">${validate_component(TitleBar, "TitleBar").$$render($$result, { title: "Placemark Services" }, {}, {})}</div> <div class="column is-half">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Header as H
};
