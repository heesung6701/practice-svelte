import { mount } from "svelte";

import "./app.css";
import App from "./App.svelte";
import routes from "./routes/routes";

const app = mount(App, {
  target: document.getElementById("app")!,
  props: {
    routes,
  },
});

export default app;
