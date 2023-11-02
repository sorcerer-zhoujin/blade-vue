import { createRouter, createWebHistory } from "vue-router";
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

const routes = [
  {
    path: "/",
    component: ComponentA,
    name: "Home",
  },
  {
    path: "/page1",
    component: ComponentA,
    name: "A",
  },
  {
    path: "/page2",
    component: ComponentB,
    name: "B",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
