<template>
  <div id="app">
    <transition :name="transitionDirection">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionDirection: 'roll-down'
    }
  },
  watch: {
    '$route' (to, from) {
      // get route depth based on path
      const toDepth = to.meta.path
      const fromDepth = from.meta.path
      console.log(toDepth, fromDepth)
      this.transitionDirection = toDepth < fromDepth ? 'roll-up' : 'roll-down'
    }
  },
  mounted () {
    let changPage = (event) => {
      let path = this.$router.currentRoute.meta.path
      if (event.keyCode === 40) {
        if (path === 1) {
          return this.$router.push({path: '/AwardsAndJersey'})
        }
      }
      if (event.keyCode === 38) {
        if (path === 2) {
          return this.$router.push({path: '/'})
        }
        if (path === 3) {
          return this.$router.push({path: '/AwardsAndJersey'})
        }
      }
    }
    document.addEventListener('keydown', changPage)
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    background: #F4F4F4;
  }
  #app {
    margin: 0 auto;
    /* width: 1440px; */
    height: 100vh;
    overflow: hidden;
    /*height: 900px;*/
  }
  .roll-down-enter-active {
    transition: all .1s ease;
  }
  .roll-down-leave-active {
    transition: all .3s;
  }
  .roll-down-enter, .roll-down-leave-to {
    transform: translateY(-100%);
    opacity: 0;
  }
  .roll-up-enter-active {
    transition: all .1s ease;
  }
  .roll-up-leave-active {
    transition: all .3s;
  }
  .roll-up-enter, .roll-up-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }
</style>
