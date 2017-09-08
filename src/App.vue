<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view v-bind:active="$route.name"></router-view>
  </div>
</template>

<script>
import Navbar from './components/command/Navbar.vue';

export default {
  name: 'app',
  components: { Navbar },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:400,700|Open+Sans');
@import 'styles/global';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6, button, a {
  font-family: 'Lato', sans-serif;
  font-weight: bold;
}
p, span {
  font-family: 'Open Sans', sans-serif;
}
ul {
  list-style-type: none;
  padding: 0;
}


a {
  color: #42b983;
}
</style>
