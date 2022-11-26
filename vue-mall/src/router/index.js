import { createRouter, createWebHashHistory } from "vue-router"

import Home from "../pages/myHome.vue"
import Login from "../pages/Login/index.vue"
import Register from "../pages/Register/index.vue"
import Search from "../pages/mySearch/index.vue"
import Detail from "../pages/myDetail/index.vue"
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "home",
      path: "/home",
      component: Home,
      meta: { showFooter: true },
    },
    {
      name: "search",
      path: "/search/:keyword?",
      component: Search,
      meta: { showFooter: true },
    },
    {
      name: "login",
      path: "/login",
      component: Login,
      meta: { showFooter: false },
    },
    {
      name: "register",
      path: "/register",
      component: Register,
      meta: { showFooter: false },
    },

    // 重定向，运行时定位到Home页
    {
      path: "/",
      redirect: "/home",
    },
    {
      name: "detail",
      path: "/detail/:skuid",
      component: Detail,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
