import { reactive } from "vue";
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import { defineAsyncComponent } from 'vue'
const _import = (path:any) => defineAsyncComponent(() => import(`../views/${path}.vue`));

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      meta:{
        title:"优贤工作室官网"
      },
      component: () => import("@/view/HomePage.vue"),
    },
    {
      path: "/news",
      name: "news",
      meta:{
        title:"优贤新闻"
      },
      component: () => import("@/view/WorkNews.vue"),
    },
    {
      path: "/detail",
      name: "detail",
      meta:{
        title:reactive({ title: `新闻详情` })
      },
      component: () => import("@/view/detail.vue"),
    },
    {
      path: "/honor",
      name: "honor",
      meta:{
        title:"优贤成就"
      },
      component: () => import("@/view/Honor.vue"),
    },
  ],
});

export default router;
