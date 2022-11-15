// axios 的二次封装
import axios from "axios"

// 对所有axios请求添加nprogress进度条效果，一定要引入css样式否则无效
import nProgress from "nprogress"
import "../../node_modules/nprogress/nprogress.css"

const request = axios.create({
  // 基础路径不用写域名地址，因为默认向本台机器发送请求，需要配置代理服务器
  baseURL: "/api",
  // 超时事件
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
  nProgress.start()
  // config配置对象，有个属性很重要 —— headers
  return config
})

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    nProgress.done()
    return response.data
  },
  (error) => {
    return Promise.reject(new Error("Failed"))
  }
)

export default request
