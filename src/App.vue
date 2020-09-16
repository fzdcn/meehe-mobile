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
#app
  height 100vh
  background linear-gradient(180deg, rgba(34, 38, 57, 1) 25%, rgba(43, 48, 71, 0.5) 35%, rgba(245, 245, 245, 1) 100%)
</style>
