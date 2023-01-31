import Vue from "vue";
import VueRouter from "vue-router";
import TheMainComponent from "@/views/TheMainComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: TheMainComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
