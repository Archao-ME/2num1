<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
    width: 1440px;
    height: 100vh;
    /*overflow: hidden;*/
    /*height: 900px;*/
  }
</style>
