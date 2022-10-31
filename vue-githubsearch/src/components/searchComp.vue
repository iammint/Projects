<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="Type in the name"
        v-model="keyWord"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios"
export default {
  name: "searchComp",
  data() {
    return {
      keyWord: "",
    }
  },
  methods: {
    searchUsers() {
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          console.log("Success", response.data)
        },
        (reason) => {
          console.log("Failure", reason.message)
        }
      )
    },
  },
  mounted() {
    console.log(this)
  },
}
</script>

<style scoped>
section {
  text-align: center;
  margin-top: 20px;
}
</style>
