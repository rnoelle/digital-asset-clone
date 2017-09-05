<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'Home', params: {} }">Welcome</router-link></li>
      <li>
        <router-link :to="{ name: 'Company', params: {} }">Company</router-link></li>
      <li>
        <router-link :to="{ name: 'Company', params: {} }">Products</router-link></li>
      <li>
        <router-link :to="{ name: 'Company', params: {} }">Technology</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "~styles/global";

  nav {
    height: 94px;
    background: $secondary;
    float: right;
    position: absolute;
    top: 0;
    right: 0;

    a.router-link-exact-active {
      color: #FFFFFF;
      background: $highlight;
      border: none;
    }
    ul {
      display: flex;
      align-items: stretch;
      height: 100%;
      width: 100%;
    }
  }

  li {
    display: flex;
    align-items: stretch;
    margin: 0;

    a {
      display: flex;
      align-items: center;
      height: 94px;
      padding: 0 3rem;
      color: #687aa8;
      text-decoration: none;
      transition: all 500ms;
      &:hover {
        color: #FFFFFF;
      }
    }
  }

</style>
