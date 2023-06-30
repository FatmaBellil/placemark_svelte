import { c as create_ssr_component } from "../../../chunks/ssr.js";
import axios from "axios";
import { u as user, l as latestPlacemark } from "../../../chunks/stores2.js";
const placemarkService = {
  // baseUrl: "http://localhost:3000",
  // baseUrl: "https://placemarksvelte.netlify.app",
  baseUrl: "https://placemark-1uvc.onrender.com",
  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email,
          token: response.data.token
        });
        localStorage.placemark = JSON.stringify({ email, token: response.data.token });
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async logout() {
    user.set({
      email: "",
      token: ""
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("placemark");
  },
  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName,
        lastName,
        email,
        password,
        role: "basic"
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  },
  reload() {
    const placemarkCredentials = localStorage.placemark;
    if (placemarkCredentials) {
      const savedUser = JSON.parse(placemarkCredentials);
      user.set({
        email: savedUser.email,
        token: savedUser.token
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
  },
  async getCategories() {
    try {
      const response = await axios.get(`${this.baseUrl}/api/categories`);
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async getCategory(id) {
    try {
      const response = await axios.get(`${this.baseUrl}/api/categories/${id}`);
      return response.data;
    } catch (error) {
      return null;
    }
  },
  async createCategory(category) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/categories`, category);
      return response.status == 201;
    } catch (error) {
      return false;
    }
  },
  async deleteCategory(id) {
    try {
      const response = await axios.delete(`${this.baseUrl}/api/categories/${id}`);
      return response.status == 204;
    } catch (error) {
      return false;
    }
  },
  async getPlacemarks(categoryid) {
    try {
      const response = await axios.get(`${this.baseUrl}/api/categories/${categoryid}/placemarks`);
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async getPlacemark(id) {
    try {
      const response = await axios.get(`${this.baseUrl}/api/placemarks/${id}`);
      return response.data;
    } catch (error) {
      return null;
    }
  },
  async createPlacemark(categoryid, placemark) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/categories/${categoryid}/placemarks`, placemark);
      latestPlacemark.set(placemark);
      return response.status == 201;
    } catch (error) {
      return false;
    }
  },
  async deletePlacemark(id) {
    try {
      const response = await axios.delete(`${this.baseUrl}/api/placemarks/${id}`);
      return response.status == 204;
    } catch (error) {
      return false;
    }
  }
};
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const goto = /* @__PURE__ */ client_method("goto");
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  placemarkService.logout();
  goto("/");
  return ``;
});
export {
  Page as default
};
