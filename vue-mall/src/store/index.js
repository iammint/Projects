import { createStore } from "vuex"

import leftNav from "./modules/home/leftNav.js"
import carousel from "./modules/home/carousel.js"
import floor from "./modules/home/floor.js"
export default createStore({
  modules: {
    leftNav,
    carousel,
    floor,
  },
})
