<template>
  <div>
    <leftNav></leftNav>
    <!-- 轮播图 -->
    <carousel></carousel>
  </div>
</template>

<script>
import leftNav from "@/components/leftNav.vue"
import carousel from "@/components/carousel.vue"
export default {
  name: "Home",
  components: { leftNav, carousel },
}
</script>

<style lang="scss" scoped></style>
