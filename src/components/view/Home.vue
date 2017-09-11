<template>
  <div class="home-page">
    <MainLogo class="logo"/>
    <JumboVideo />
    <div class="title">
      <a><span>News</span> Digital Asset to be Title Sponser at Synchronize
        <PixelArrow class="icon light"/>
      </a>
      <h1>Synchronized Finance</h1>
    </div>
  </div>
</template>

<script>
  import MainLogo from '../pres/MainLogo.vue';
  import JumboVideo from '../pres/JumboVideo.vue';
  import PixelArrow from '../../assets/arrow-px-sm.svg';

  export default {
    name: 'Home',
    components: {
      MainLogo,
      JumboVideo,
      PixelArrow
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
  .logo {
    color: #FFFFFF;
    display: flex;
    align-items: center;
    font-size: 1.15rem;
    height: 94px;
    padding-left: 47px;
    svg {
      margin-right: .75rem;
      height: 1.5rem;
      path {
        fill: #FFFFFF;
      }
  }
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
      background: $highlight;
      border-radius: 1em;
      padding: .50em .75em .50em 0;
      height: 20px;
      span {
        padding: .20em .75em;
        border-radius: 1rem;
        background: $light;
        margin-right: .85em;
      }
      .icon.light {
        height: .65rem;
        transform: translate(0, .05em);
        margin-left: .75rem;
        margin-right: .5rem;
        path {
          fill: $light;
        }
      }
    }
  }


</style>
