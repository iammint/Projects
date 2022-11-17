<template>
  <div class="container">
    <div class="block text-center">
      <el-carousel height="509px">
        <el-carousel-item v-for="item in images" :key="item.id">
          <a href=""><img :src="item.imgUrl" alt="carousel" /></a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState("carousel", ["images"]),
  },
}
</script>

<style scoped>
.container {
  width: 81.5%;
  float: right;
}
.el-carousel__item a {
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
