import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";
import Page from "../views/PageView.vue";
import Blog from "../views/BlogView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page/:name",
    name: "Page",
    component: Page,
  },
  {
    path: "/blog/:name",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
