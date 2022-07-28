import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "../store/store";

import "./assets/main.css";

const app = createApp(App);

app.use(store, key);
app.use(router);

app.mount("#app");