import { createApp } from "vue";
import { mainPinia } from "src/store";

import "virtual:uno.css";
import "virtual:unocss-devtools";

import { router } from "./router";
import App from "./App.vue";
import "src/style/index.scss";
import { createDirective } from "src/directive";

const app = createApp(App);

app.use(mainPinia).use(router).use(createDirective()).mount("#app");
