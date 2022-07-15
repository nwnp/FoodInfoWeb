import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/posts",
    component: () => import("../views/post/post.vue"),
  },
  {
    path: "/finding",
    component: () => import("../views/user/findUser.vue"),
  },
  {
    path: "/myposts",
    component: () => import("../views/user/myPosts.vue"),
  },
  {
    path: "/posts/detail",
    component: () => import("../views/post/postDetail.vue"),
  },
  {
    path: "/nutritions",
    component: () => import("../views/nutritions/nutritions.vue"),
  },
  {
    path: "/*",
    component: () => import("../components/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
