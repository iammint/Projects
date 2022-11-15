<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header> <myHeader></myHeader></el-header>
        <el-main><router-view></router-view></el-main>
        <el-footer>
          <!-- Home/Search组件显示Footer，Register/Login隐藏Footer -->
          <!-- <myFooter v-show="$route.meta.showFooter"></myFooter -->
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
