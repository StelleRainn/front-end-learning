import ArticleDetail from "@/views/ArticleDetail.vue";
import Collect from "@/views/Collect.vue";
import Layout from "@/views/Layout.vue";
import Like from "@/views/Like.vue";
import User from "@/views/User.vue";
import Article from "@/views/Article.vue";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // 一级路由（两个）
    {
      path: "/",
      component: Layout,
      redirect: "/article",
      /**
       * 配置嵌套二级路由
       * 通过children配置项，可以配置嵌套路由
       * 1. 配置路由规则
       * 2. 在父级组件中，配置路由出口 <router-view>
       * */
      children: [
        {
          path: "/article",
          component: Article,
        },
        {
          path: "/collect",
          component: Collect,
        },
        {
          path: "/like",
          component: Like,
        },
        {
          path: "/user",
          component: User,
        },
      ],
    },
    {
      path: "/detail:id",
      component: ArticleDetail,
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
