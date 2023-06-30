import { c as create_ssr_component, b as each, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
const CategoryList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let categoryList = [];
  return `<table class="table is-fullwidth"><thead data-svelte-h="svelte-157g9sb"><th style="text-align: center;">Title</th> <th style="text-align: center;">Details</th> <th style="text-align: center;">Delete</th></thead> <tbody>${each(categoryList, (category) => {
    return `<tr><td>${escape(category.name)}</td> <td><button><a${add_attribute("href", `/category/${category._id}`, 0)}><i class="fas fa-edit"></i></a> </button></td> <td><form><button type="submit" name="delete category"${add_attribute("data-category-id", category._id, 0)}><i class="fas fa-trash"></i></button> </form></td> </tr>`;
  })}</tbody></table> ${``}`;
});
const AddCategoryForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let message = "";
  return `<form><div class="field"><label class="label" for="name" data-svelte-h="svelte-bsngg3">Enter the title</label> <input class="input" id="name" name="name" placeholder="category" type="string"${add_attribute("value", name, 0)}></div> <div class="field" data-svelte-h="svelte-1czie36"><div class="control"><button type="submit" class="button is-link is-light">Add</button></div></div> <div class="box">${escape(message)}</div></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} <div class="box has-text-centered"><h1 class="title is-4" data-svelte-h="svelte-1ykprmk">Categories:</h1> ${validate_component(CategoryList, "CategoryList").$$render($$result, {}, {}, {})}</div> <div class="box has-text-centered"><h1 class="title is-4" data-svelte-h="svelte-hb27au">Add a new category:</h1> ${validate_component(AddCategoryForm, "AddCategoryForm").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
