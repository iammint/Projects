import { createRouter, createWebHistory } from "vue-router"

import Home from "../pages/myHome.vue"
import Login from "../pages/myLogin.vue"
import Register from "../pages/myRegister.vue"
import Search from "../pages/mySearch.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/home",
      component: Home,
      meta: { showFooter: true },
    },
    {
      name: "search",
      path: "/search/:keyword",
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
  ],
})

export default router
