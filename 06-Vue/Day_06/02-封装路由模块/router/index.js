/**
 * 从main.js中分离路由模块并封装：
 *  在src下创建router文件夹，创建index.js文件
 *  index.js中的配置照搬自main.js中的路由配置
 *  然后使用 export default 导出路由示例
 *  最后在main.js中引入路由模块并使用
 */

import Vue from "vue";
import VueRouter from "vue-router";

import Find from "@/views/Find.vue";
import Friend from "@/views/Friend.vue";
import My from "@/views/My.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/find", component: Find },
    { path: "/friend", component: Friend },
    { path: "/my", component: My },
  ],
});

export default router;
