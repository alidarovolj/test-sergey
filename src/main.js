import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/main.less";
import "./assets/css/fonts.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "tw-elements";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
