<template>
  <div class="home-page">
    <video autoplay src="../../assets/v02.mp4"></video>
  </div>
</template>

<script>

  export default {
    name: 'Home',
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
  video {
    width: 100%;
    position: absolute;
    top:0;
    left: 0;
    z-index: -1;
  }
</style>
