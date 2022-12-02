import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SplashView from "../views/SplashView.vue";

const routes = [
   {
      path: "/",
      name: "splash",
      component: SplashView,
   },
   {
      path: "/home",
      name: "home",
      component: HomeView,
   },
   {
      path: "/surat/:key",
      name: "surat",
      component: () => import("../views/DetailSurat.vue"),
   },
   {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchView.vue"),
   },
   {
      path: "/privacy",
      name: "privacy",
      component: () => import("../views/PrivacyView.vue"),
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
