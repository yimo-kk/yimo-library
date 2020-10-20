<template>
  <div id="app">
   <Banner>Fundebug：最专业的应用错误监控平台!</Banner>
  </div>
</template>

<script>
import Banner from '@/components/Banner/Banner.vue'

export default {
  name: 'App',
  components: {
    Banner
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
