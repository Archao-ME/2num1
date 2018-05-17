<template>
  <div class="background">
    <div class="mouse" @click="goTo"></div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  },
  methods: {
    goTo () {
      this.$router.push({path: '/HelloWorld'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/layout.scss';
.background{
  width: 100%;
  height: 100%;
  background-image: url("../assets/home-page.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #FFC117;
  .mouse{
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
