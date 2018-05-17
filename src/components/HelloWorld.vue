<template>
  <div class="t-switch-wrapper">
    <div class="roll-btn pre" @click="rollPre()">pre</div>
    <div class="roll-btn next" @click="rollNext()">next</div>
    <div class="origin-wrapper">
      <div class="trans-origin-wrapper" :class="'active-' + currentIndex">
        <div class="roll-wrapper">
          <div class="item" v-for="(item, index) in itemList" :key="index" :class="'t-'+index" :attr-item="index" :attr-active="currentIndex === index" v-if="index<20"></div>
        </div>
      </div>
    </div>
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
      console.log('pre')
      this.currentIndex > 0 ? this.currentIndex = this.currentIndex - 1 : this.currentIndex = 0
    },
    rollNext () {
      console.log('pre')
      this.currentIndex < 20 ? this.currentIndex = this.currentIndex + 1 : this.currentIndex = 19
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $wholeDeg: 18;
  .origin-wrapper {
    height: 300px;
    /*overflow: hidden;*/
  }
  .trans-origin-wrapper {
    position: relative;
    width: 1104px;
    height: 1104px;
    transition: 1s ease;
  }
  .roll-wrapper {
    transform: translateX(-70px);
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
    transition: 1s ease;
  }
  @for $i from 0 through 30 {
    $deg: $i*$wholeDeg + deg;
    .active-#{$i} {
      transform: rotate((-$i*$wholeDeg) + deg);
    }
    .t-#{$i} {
      $tNum: 1996 + $i;
      @if $i < 20 {
        $tNumBg: "../assets/big/t-" + $tNum + '.png';
        transform:rotate($deg) scale(0.8, 0.8);
        background: url($tNumBg);
      }
      background-size: cover;
    }
    .t-#{$i}.item[attr-active=true] {
      opacity: 1;
      transform:rotate($deg) scale(1, 1);
    }
  }
</style>
