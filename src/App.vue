<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {},
  name: 'app'
}
</script>
<style lang="stylus">
html, body
  height 100%
  width 100%
  background #F2F1F6
  #app
    height 100vh
    .home
      height 290px
      background linear-gradient(180deg, #222639 0%, rgba(43, 48, 71, 0.5) 47%, rgba(245, 245, 245, 0) 100%)
</style>
