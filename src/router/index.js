import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/Home/indexPage.vue";
import MailForum from "../views/MailForum/indexPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainView,
  },
  {
    path: "/mailForum",
    name: "Home",
    component: MailForum,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
