<template>
  <div>
    <leftNav></leftNav>
    <!-- 轮播图 -->
    <carousel></carousel>
    <!-- floor广告 -->
    <!-- 需要props传递数据 -->
    <homeFooter
      v-for="list in floorList"
      :key="list.id"
      :list="list"
    ></homeFooter>
  </div>
</template>

<script>
import leftNav from "@/components/leftNav.vue"
import carousel from "@/components/carousel.vue"
import homeFooter from "@/components/homeFooter.vue"
import test from "@/components/test.vue"
import { mapState } from "vuex"
export default {
  name: "Home",
  components: { leftNav, carousel, homeFooter, test },
  computed: {
    ...mapState("floor", ["floorList"]),
  },
}
</script>

<style lang="scss" scoped></style>
