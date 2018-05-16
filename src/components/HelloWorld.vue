<template>
  <div class="trans-origin-wrapper">
    <div class="roll-btn pre" @click="rollPre()">pre</div>
    <div class="roll-btn next" @click="rollNext()">next</div>
    <div class="item" v-for="(item, index) in itemList" :key="index" :class="'t-'+(index + currentIndex)" :attr-item="index" v-if="index<19"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      currentIndex: 0,
      itemList: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    }
  },
  methods: {
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
  .trans-origin-wrapper {
    position: absolute;
    bottom: 0;
    height: 630px;
    width : 1100px;
    overflow: hidden;
  }
  .roll-btn {
    display: inline-block;
    width: 100px;
    height: 30px;
    background: #ccc;
  }
  .item {
    position: absolute;
    left: 50%;
    height: 145px;
    width: 136px;
    background: #ccc;
    transform-origin: 50% 552px;
    opacity: 0.5;
  }
  @for $i from 0 through 30 {
    .item.t-#{$i} {
      $tNum: 1996 + $i;
      $deg: $i*20 + deg;
      @if $i < 19 {
        $tNumBg: "../assets/big/t-" + $tNum + '.png';
        transform:rotate($deg) scale(0.8, 0.8);
        background: url($tNumBg);
      }
      background-size: cover;
    }
  }
</style>
