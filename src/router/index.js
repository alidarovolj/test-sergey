import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../views/mainView.vue";

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
