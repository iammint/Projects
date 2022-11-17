<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header> <myHeader></myHeader></el-header>
        <el-main><router-view></router-view></el-main>
        <el-footer>
          <!-- Home/Search组件显示Footer，Register/Login隐藏Footer -->
          <myFooter v-show="$route.meta.showFooter"></myFooter>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<script>
import myHeader from "./components/myHeader.vue"
export default {
  name: "APP",
  components: {
    myHeader,
  },
  mounted() {
    // 只能写在App.vue里，不能写在main.js中，因为只有在组件里才能访问到this.$store
    // 挂载完毕vuex发送请求，获取数据储存在store中，请求分类列表的数据
    this.$store.dispatch("leftNav/categoryList")

    // 轮播图的图片数据
    this.$store.dispatch("carousel/carouselImg")

    // floor广告区
    this.$store.dispatch("floor/floorData")
  },
}
</script>

<style>
.el-header,
.el-main,
.el-footer {
  padding: 0;
  overflow: visible;
}
</style>
