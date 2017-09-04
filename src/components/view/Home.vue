<template>
  <div class="home-page">
    <h1>This is the Home page</h1>
    <router-link to="/company">Company</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        msg: 'hey yah'
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: #93c390;
  }
</style>
