<template>
  <div>
    <myHeader></myHeader>
    <leftNav></leftNav>
    <router-view></router-view>

    <!-- Home/Search组件显示Footer，Register/Login隐藏Footer -->
    <myFooter v-show="$route.meta.showFooter"></myFooter>
  </div>
</template>

<script>
import myHeader from "./components/myHeader.vue"
import myFooter from "./components/myFooter.vue"
import leftNav from "./components/leftNav.vue"
export default {
  name: "APP",
  components: {
    myHeader,
    myFooter,
    leftNav,
  },
}
</script>

<style></style>
