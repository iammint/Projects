// 引入mockjs插件
import Mock from "mockjs"

// 引入json数据
import banner from "./banner.json"
import floor from "./floor.json"

// 第一个参数：请求地址，第二个参数：请求数据
// mock轮播图数据
Mock.mock("/mock/banner", { code: 200, data: banner })

// 模拟下面广告的数据
Mock.mock("/mock/floor", { code: 200, data: floor })

// 需要在入口文件引入mockServe.js文件
// 不用对外暴露，直接引入让其执行
