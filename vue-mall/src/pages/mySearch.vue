<template>
  <div>
    <leftNav></leftNav>
    <div>{{ $route.query.categoryName }}</div>
    <div>{{ $route.query.categoryId }}</div>
    <div>{{ $route.params.keyWord }}</div>
  </div>
</template>

<script>
import leftNav from "@/components/leftNav.vue"
export default {
  name: "search",
  mounted() {
    leftNav
  },
}
</script>
