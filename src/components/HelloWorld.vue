<template>
  <div class="t-switch-wrapper flex-box flex-direction-column jc-sb">
    <div class="top flex-box">
      <div class="logo flex-box ai-c">
        <div class="logo-left">
          <img :src="'../static/logo/logo.png'" alt="">
        </div>
        <div class="logo-right">
          <img :src="'../static/logo/2N1.png'" alt="">
        </div>
      </div>
      <div class="season-awards">
        <img :src="'../static/logo/season-awards.png'" alt="">
      </div>
    </div>
    <div class="awards-show flex-box jc-ce">
      <div class="award-item flex-box jc-ce" v-for="(item, index) in itemList[currentIndex].infoPic" :key="index">
        <img :src="makePicUrl(item)" alt="">
      </div>
    </div>
    <div class="show-wrapper">
      <div class="roll-btn-bg-circel"></div>
      <!--<div class="roll-origin-bg-circel"></div>-->
      <div class="switch-btn-wrapper flex-box ai-c jc-ce">
        <div class="roll-btn pre" @click="rollPre()"></div>
        <div class="title">{{itemList[currentIndex].name}}</div>
        <div class="roll-btn next" @click="rollNext()"></div>
      </div>
      <div class="origin-wrapper">
        <div class="trans-origin-wrapper" :class="'active-' + currentIndex">
          <div class="roll-wrapper">
            <div class="item" :class="'t-b-'+index" v-for="(item, index) in itemList" :key="index" :attr-item="index" :attr-active="currentIndex === index" :attr-active-mid="currentIndex === index + 1 || currentIndex === index - 1" v-if="index - currentIndex <5 && currentIndex - index < 5">
              <div class="item-img" :class="'t-'+index"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemList from './itemList'
export default {
  name: 'HelloWorld',
  data () {
    return {
      currentIndex: 0,
      itemList
    }
  },
  methods: {
    makePicUrl (name) {
      return '../static/awards/' + name + '.png'
    },
    rollPre () {
      this.currentIndex > 0 ? this.currentIndex = this.currentIndex - 1 : this.currentIndex = 0
    },
    rollNext () {
      this.currentIndex < 20 ? this.currentIndex = this.currentIndex + 1 : this.currentIndex = 19
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../styles/layout.scss';
  .top {
    position: relative;
    width: 100%;
    height: 100px;
  }
  .top .season-awards {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 275px;
    height: 140px;
  }
  .top img {
    display: block;
    width: 100%;
    /*height: 100%;*/
  }
  .logo .logo-left {
    width: 58px;
    height: 71px;
  }
  .logo .logo-right {
    margin-left: 10px;
    width: 120px;
    /*height: 142px;*/
  }
  .show-wrapper {
    position: relative;
  }
 .t-switch-wrapper {
    width: 100%;
    height: 100%;
  }
  .switch-btn-wrapper {
    position: relative;
    z-index:10;
    width: 460px;
    margin: 0 auto;
    background: #F4F4F4;
  }
  .switch-btn-wrapper .title {
    color: #563087;
    font-size: 60px;
  }
  .origin-wrapper {
    /*position: absolute;*/
    /*bottom: 0;*/
    width: 100%;
    height: 450px;
    overflow: hidden;
  }
  .trans-origin-wrapper {
    position: relative;
    z-index: -1;
    top: 100px;
    width: 1104px;
    height: 1104px;
    margin: 0 auto;

    border: 2px solid #ccc;
    border-radius: 50%;

    transition: 1s ease;
  }
  .roll-wrapper {
    transform: translateX(-70px);
  }
  .roll-btn {
    display: inline-block;
    width: 0;
    height: 0;
    margin:10px 20px 0 20px;
    border-style: solid;
  }
  .roll-btn.pre {
    border-width: 10px 15px 10px 0;
    border-color: transparent #c6c6c6 transparent transparent;
  }
  .roll-btn.next {
    border-width: 10px 0 10px 15px;
    border-color: transparent transparent transparent #c6c6c6;
  }
  .roll-btn-bg-circel {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 1200px;
    height: 1200px;
    border: 4px solid #533188;
    border-radius: 50%;
  }
  .roll-origin-bg-circel {
    position: absolute;
    top: 230px;
    left: 50%;
    transform: translateX(-50%);
    width: 1100px;
    height: 1100px;
    border: 3px solid #533188;
    border-radius: 50%;
  }
  .item {
    position: absolute;
    left: 50%;
    height: 145px;
    width: 136px;
    background: #F4F4F4;
    transform-origin: 50% 552px;
    transition: 1s ease;
    .item-img{
      width: 100%;
      height: 100%;
      opacity: 0.5;
    }
  }
  .award-item {
    height: 250px;
    width: 250px
  }
  .award-item img {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }

  $wholeDeg: 28;
  @for $i from 0 through 30 {
    $deg: $i*$wholeDeg + deg;
    .active-#{$i} {
      transform: rotate((-$i*$wholeDeg) + deg);
    }
    .t-#{$i} {
      z-index: 10;
      $tNum: 1996 + $i;
      @if $i < 20 {
        $tNumBg: "../assets/big/t-" + $tNum + '.png';
        // transform:rotate($deg) scale(0.8, 0.8) translateY(-200px);
        background: url($tNumBg);
      }
      background-size: cover;
    }
    .t-#{$i}.item[attr-active=true] {
      opacity: 1;
      // transform:rotate($deg) scale(1.4, 1.4) translateY(100px);
    }
    .t-#{$i}.item[attr-active-mid=true] {
      // transform:rotate($deg) scale(1, 1) translateY(-60px);
    }

    .t-b-#{$i} {
      z-index: 10;
      $tNum: 1996 + $i;
      @if $i < 20 {
        transform:rotate($deg) scale(0.8, 0.8) translateY(-200px);
      }
      background-size: cover;
    }
    .t-b-#{$i}.item[attr-active=true] {
      opacity: 1;
      transform:rotate($deg) scale(1.4, 1.4) translateY(100px);
    }
    .t-b-#{$i}.item[attr-active-mid=true] {
      transform:rotate($deg) scale(1, 1) translateY(-60px);
    }
  }
</style>
