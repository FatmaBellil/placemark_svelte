import { w as writable } from "./index.js";
const user = writable({
  email: "",
  token: ""
});
const latestPlacemark = writable(null);
export {
  latestPlacemark as l,
  user as u
};
