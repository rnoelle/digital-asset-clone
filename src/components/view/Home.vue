<template>
  <div class="home-page">
    <MainLogo class="logo"/>
    <JumboVideo :start-next="startNext" :slide="slide"/>
    <div class="title">
      <a><span>News</span> Digital Asset to be Title Sponser at Synchronize
        <PixelArrow class="icon light"/>
      </a>
      <h1>Synchronized Finance</h1>
      <div class="mid">
        <div class="container">

        <div class="left up">
          <p><span>0{{slide+1}}</span> <em>/</em> 03</p>
          <div></div>
        </div>
        <div class="right">
          <div class="circle" v-on:click="startNext"><PixelArrow class="light"/></div>
          <div class="circle" v-on:click="startPrevious"><PixelArrow class="light"/></div>
        </div>
      </div>
      <div class="container">
        <div class="left down">
          <p><span>{{introText[slide]}}</span> {{pText[slide]}}</p>
        </div>
        <div class="right">

        </div>
      </div>
      </div>
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
        slide: 0,
        introText: [
          'Current financial infrastructure',
          'This siloed data',
          'Distributed Ledger Technology'
        ],
        pText: [
          'relies on siloed data, with each institution keeping independent and duplicated records of the same information.',
          'introduces significant operational latency, leading to expensive reconciliation and time-consuming trade breaks.',
          'provides a secure universal record of the truth to all parties to a transaction, eliminating the need for reconciliation. This improves efficiency while enabling new, shared business processes.'
        ]
      }
    },
    methods: {
      startNext(video) {
        if (typeof video !== 'number') {
          return this.slide = (this.slide + 1) % 3;
        }
        return this.slide = video;
      },
      startPrevious() {
        return this.slide = (this.slide - 1) % 3;
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
    width: 80vw;
    margin: auto;
    height: calc(100vh - 112px);
    padding-top: 35px;
    text-align: center;
    position: relative;
    > a {
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
    .mid {
      position: absolute;
      bottom: 0;
      width: 100%;
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 2.5rem 0;
      }
      .left.up {
        transform: rotate(-90deg);
        margin-left: -3.9rem;
        display: flex;
        align-items: center;
        > div {
          height: 1px;
          width: 64px;
          background: $line-gray;
          margin-left: 1em;
        }
        p {
          color: #FFFFFF;
          font-size: .75rem;
          span {
            color: $light;
          }
          em {
            margin: 0 .5em;
          }
        }
      }
      .left.down {
        height: 4rem;
        padding-bottom: 150px;
        p {
          color: $light-dark;
          width: 350px;
          text-align: left;
          font-size: .80rem;
          line-height: 2em;
          span {
            color: #FFFFFF;
          }
        }
      }
      .right {
        div.circle {
          background: #FFFFFF;
          padding: 1rem 1.10rem;
          border-radius: 50%;
          margin-bottom: 1rem;
          &:last-child {
            transform: rotate(180deg);
          }
          svg {
            height: .75rem;
            width: .75rem;
            path {
              fill: $light;
            }
          }
        }
      }
    }
  }


</style>
