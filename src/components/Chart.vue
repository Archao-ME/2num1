<template>
  <div class="chart-wrapper flex-box jc-ce">
    <div class="left">
      <img :src="'../static/season/season-' + yearStart +'.png'" class="season">
      <img :src="'../static/total-score.png'" class="total-score">
      <img :src="'../static/chart-line/chart-line-' + yearStart + '.png'" class="line-chart">
      <div class="score-wrapper">
        <img :src="'../static/score/score-range.png'" class="score-range">
        <div v-for="(item, index) in scoreList" :key="index" class="score-item" :class="{'opacity-50': isExclude(index)}" @click="chooseScore(index)">
          <div :class="[currentScore === index ? 'icon-square-purple' : 'icon-square-grey']"></div>
          <div :class="[currentScore === index ? 'score-'+ index + '-purple' : 'score-' + index + '-grey']"></div>
        </div>
      </div>
    </div>
      <div class="center" >
        <!-- <div ref="chartPie" class="chart-pie"></div> -->
        <transition name="fade" mode="out-in" appear>
          <img class="chart-circle" :src="chartCircleImg" :key="chartCircleImg">
        </transition>
        <img class="chart-legend" :src="'../static/chart-circle-legend.png'">
      </div>
    <div class="right">
      <img :src="'../static/show-time.png'" class="show-time">
      <div class="gap-line"></div>
      <div class="chart-bar">
      </div>
      <img :src="'../static/show-time-legend.png'" class="show-time-legend">
    </div>
  </div>
</template>

<script>
import scoreList from './scoreList'
export default {
  name: 'Chart',
  data () {
    return {
      currentScore: 0,
      scoreList,
      chart: null,
      excludeList: []
    }
  },
  computed: {
    chartCircleImg () {
      return `../static/chart-circle/${this.yearStart}/chart-${this.yearStart}-${this.currentScore}.png`
    },
    yearStart () {
      return parseInt(this.$route.params.yearId)
    },
    yearRange () {
      let yearEnd = this.yearStart + 1
      return this.yearStart + '-' + yearEnd + '.png'
    }
  },
  created () {
    this.excludeList = require('../../static/chart-circle/' + this.yearStart)
  },
  methods: {
    chooseScore (index) {
      if (!this.isExclude(index)) {
        this.currentScore = index
      }
    },
    isExclude (index) {
      return this.excludeList.default.exclude.includes(index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../styles/layout.scss';
  .opacity-50 {
    opacity: 0.5;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
    transform: scale(1) rotate(0deg);
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: scale(0.2) rotate(180deg);
  }
  .chart-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .left{
    width: 200px;
    height: 100%;
    padding: 60px 0 60px 50px;
    .season{
      width: 190px;
      height: auto;
      display: block;
    }
    .total-score{
      width: 125px;
      height: auto;
      display: block;
      margin-top: 75px;
    }
    .line-chart{
      width: 185px;
      height: auto;
      display: block;
      margin-top: 20px;
    }
    .year-range{
      width: 190px;
      height: auto;
      margin-top: 10px;
    }
    .score-wrapper{
      width: 140px;
      height: 320px;
      border: 1px solid #563087;
      border-radius: 20px;
      padding: 20px;
      margin-top: 100px;
      .score-range{
        width: 80px;
        height: auto;
      }
      .score-item{
        display: block;
        width: 100%;
        height: 30px;
        margin-bottom: 10px;
      }
      .icon-square{
        width: 23px;
        height: 30px;
        float: left;
      }
      .icon-square-purple{
        @extend .icon-square;
        background: url("/static/score/icon-square-purple.png");
        background-size: cover;
      }
      .icon-square-grey{
        @extend .icon-square;
        background: url("/static/score/icon-square-grey.png");
        background-size: cover;
      }
    }
  }
  .score-text{
    width: 97px;
    height: 28px;
    float: left;
  }
  @for $i from 0 through 6 {
    $score-grey: "/static/score/score-" + $i + '-grey.png';
    $score-purple: "/static/score/score-" + $i + '-purple.png';
    .score-#{$i}-grey {
      @extend .score-text;
      background: url($score-grey);
      background-size: cover;
      margin: 1px 10px;
    }
    .score-#{$i}-purple {
      @extend .score-text;
      background: url($score-purple);
      background-size: cover;
      margin: 1px 10px;
    }
  }
  .center{
    width: 750px;
    height: 100%;
    .chart-circle{
      width:750px;
      height: 750px;
      object-fit: cover;
    }
    .chart-legend{
      width: 280px;
      height: 50px;
      object-fit: cover;
      margin-left: 50%;
      transform: translateX(-50%);
      margin-top: 30px;
    }
  }
  .right{
    width: 350px;
    height: 100%;
    padding-top: 60px;
    margin-right: 60px;
    .gap-line{
      width: 390px;
      height: 2px;
      background-color: #B7ACCC;
      margin-top: 5px;
    }
    .show-time{
      width: 174px;
      height: 28px;
      display: block;
      padding-left: 20px;
    }
    .chart-bar{
      padding-left: 20px;
      width: 330px;
      height: 750px;
      background-color: #FF3E3E;
    }
    .show-time-legend{
      width: 180px;
      height: 15px;
      display: block;
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
