import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/Home/IndexPage.vue";
import MailForum from "@/views/MailForum/IndexPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainView,
  },
  {
    path: "/mailForum",
    name: "MailForum",
    component: MailForum,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
