<template>
  <div class="home-page">
    <JumboVideo />
    <div class="title">
      <a><span>News</span> Digital Asset to be Title Sponser at Synchronize
        <img src="../../assets/arrow-px-sm.svg"/>
      </a>
      <h1>Synchronized Finance</h1>
    </div>
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

<style lang="scss">
  @import '~styles/global';

  .homepage {
    height: 100vh;
    width: 100%;
  }
  h1 {
    color: #FFFFFF;
    font-size: 4rem;
    margin-top: 1rem;
    font-weight: bold;
  }
  .title {
    width: 100%;
    height: 100%;
    padding-top: 115px;
    text-align: center;
    a {
      color: #ffffff;
      font-size: .75rem;
      background: $secondary;
      border-radius: 1em;
      padding: .35em 1em .35em 0;
      span {
        padding: .35em 1em;
        border-radius: 1rem;
        background: $light;
        margin-right: .85em;
      }
    }
  }

</style>
