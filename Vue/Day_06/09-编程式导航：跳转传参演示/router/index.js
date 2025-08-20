import Home from "@/views/Home";
import Search from "@/views/Search";
import NotFound from "@/views/NotFound.vue";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter); // VueRouter插件初始化

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    // 添加name
    { name: "search", path: "/search/:words?", component: Search },
    { path: "*", component: NotFound },
  ],
  mode: "history",
});

export default router;
