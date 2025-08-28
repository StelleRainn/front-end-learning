import Home from "@/views/Home";
import Search from "@/views/Search";
import NotFound from "@/views/NotFound.vue";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter); // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  routes: [
    // 1. Vue路由-重定向：在路由配置中添加重定向规则
    // { path: 匹配到的路, redirect: 重定向到的路径}
    { path: "/", redirect: "/home" },

    { path: "/home", component: Home },
    { path: "/search/:words?", component: Search },

    // 2. Vue路由-404：当路径找不到匹配时，给一个提示
    // 同样添加配置对象，要在配置数组的最后面
    { path: "*", component: NotFound },
  ],

  // 3. Vue路由-模式设置
  // 配置 mode 属性，包括 hash 和 history 两个值；前者为默认，一旦选择后者，符号 # 将消失，且以后上线需要后台支持
  mode: "history",
});

export default router;
