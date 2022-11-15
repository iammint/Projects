1. `vue.config.js`中取消`eslint`语法检查
2. 分析路由，通过超链接 a 跳转的使用`<router-link>`，其余通过`this.$router.push()`或者`this.$router.replace()`实现跳转
3. 默认重定向为 Home 页面，点击 logo 也会返回 Home 页面
4. 跳转路由后，`Footer`有的会显示，有的不显示，对`Footer`在某些情况下通过`meta`元信息和`v-show`进行隐藏。`register`和`login`路由跳转后隐藏`Footer`。
5. 搜索路由传参
6. `service`/`request.js`二次封装 axios
7. `service`/`index.js`写 axios 请求函数并导出
8. 从后端 API 接口获得数据储存在 vuex 的 store 仓库中。注意在`actions`中进行异步请求，引入 axios 请求函数，结合`async`和`await`语句进行异步请求。
9. 获取数据渲染列表
