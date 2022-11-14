import { createApp } from "vue"
import App from "./App.vue"

// 引入css样式和图标
import "./assets/css/reset.css"
import "./assets/css/base.css"
import "./assets/fa/FontAwsome/css/all.css"

// 引入路由
import router from "./router/index"

const app = createApp(App)

app.use(router)
app.mount("#app")
