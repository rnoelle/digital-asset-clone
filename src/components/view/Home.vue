<template>
  <div class="home-page">
    <JumboVideo />
  </div>
</template>

<script>
  import JumboVideo from '../pres/JumboVideo.vue';

  export default {
    name: 'Home',
    components: {
      JumboVideo
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  h1 {
    color: #93c390;
  }

</style>
