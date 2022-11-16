1. `vue.config.js`中取消`eslint`语法检查
2. 分析路由，通过超链接 a 跳转的使用`<router-link>`，其余通过`this.$router.push()`或者`this.$router.replace()`实现跳转
3. 默认重定向为 Home 页面，点击 logo 也会返回 Home 页面
4. 跳转路由后，`Footer`有的会显示，有的不显示，对`Footer`在某些情况下通过`meta`元信息和`v-show`进行隐藏。`register`和`login`路由跳转后隐藏`Footer`。
5. 搜索路由传参
6. `service`/`request.js`二次封装 axios
7. `service`/`index.js`写 axios 请求函数并导出
8. 从后端 API 接口获得数据储存在 vuex 的 store 仓库中。注意在`actions`中进行异步请求，引入 axios 请求函数，结合`async`和`await`语句进行异步请求。
9. 获取数据渲染列表
10. 点击列表每一个超链接 a 都会进行传参和路由的跳转，`<router-link>`是一个组件，如果全都使用组件会造成几百个组件。而如果对每一个 a 都进行编程式导航，函数太多也会造成内存浪费。因此我们可以利用事件的委派，在父元素上绑定事件，然后委派到所有子元素上，利用自定义属性区分开 a 与其他不需要路由跳转的元素，也可以区分开一级、二级、三级的标签。
11. Home 路由类别下拉，Search 路由类别隐藏，hover 显示，由`v-show`控制
12. `<transition>` 给类别下拉添加动画，通过`v-if`或`v-show`实现
13. 从 API 接口获取商品分类可以优化，因为不同的路由之间同时引用了类别模块，每次路由`mounted`都会重新加载一些无变化的数据，因此可以在`App.vue`中请求数据，只会`mounted`一次
14. 合并参数，从类别下拉里选择之后，再在此类别中搜索，query 和 params 都要传递。或者搜索关键字后，再点击类别，也都要传递。
15. 模拟数据，前端mock的数据不会与后台进行通信。
16. 修改element-plus的宽高，可以通过修改外部容器的尺寸来修改内部组件的尺寸。