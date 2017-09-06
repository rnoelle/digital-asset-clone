<template>
    <div class="jumbo-video-container">
      <div class="jumbo-video-wrapper">
        <video autoplay id="vid0" v-bind:style="{opacity: vid0}" src="../../assets/v00.mp4"></video>
        <video id="vid1" v-bind:style="{opacity: vid1}" src="../../assets/v01.mp4"></video>
        <video id="vid2" v-bind:style="{opacity: vid2}" src="../../assets/v02.mp4"></video>
      </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      var video0 = document.getElementById('vid0')
        , video1 = document.getElementById('vid1')
        , video2 = document.getElementById('vid2')
        ;

      video0.onended = () => {
        video1.play();
        this.vid1 = .99;
        this.vid0 = 0;
      }
      video1.onended = () => {
        video2.play();
        this.vid2 = .99;
        this.vid1 = 0;
      }
      video2.onended = () => {
        video0.play();
        this.vid0 = .99;
        this.vid2 = 0;
      }
    },
    data() {
      return {
        vid0: .99,
        vid1: 0,
        vid2: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .jumbo-video-wrapper {
    top: 60%;
    width: 2560px;
    height: 1440px;
    position: absolute;
    left: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
    video {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
  .jumbo-video-container {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }

</style>
