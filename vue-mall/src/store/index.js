import { createStore } from "vuex"

import leftNav from "./modules/leftNav.js"

export default createStore({
  modules: {
    leftNav,
  },
})
