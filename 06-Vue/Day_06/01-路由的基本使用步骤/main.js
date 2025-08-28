import Vue from "vue";
import App from "./App.vue";
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

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
