<template>
  <div>
    <searchComp></searchComp>
    <listComp></listComp>
  </div>
</template>

<script>
import searchComp from "./components/searchComp.vue"
import listComp from "./components/listComp.vue"
export default {
  components: {
    searchComp,
    listComp,
  },
}
</script>
