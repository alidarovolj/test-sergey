import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../views/Home/MainView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
