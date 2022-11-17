import { createApp } from "vue"
import App from "./App.vue"

// 引入css样式和icon图标
import "./assets/css/reset.css"
import "./assets/css/base.css"
import "./assets/fa/FontAwsome/css/all.css"

// 引入mockjs数据，直接引入让其执行
import "./mock/mockServe.js"

// 引入swiper的样式
import "swiper/css"

// 引入路由
import router from "./router/index"

// 引入vuex的store仓库
import store from "./store/index"

const app = createApp(App)

app.use(router).use(store)
app.mount("#app")
