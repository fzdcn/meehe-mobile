<template>
  <div class="navBar">
    <van-nav-bar fixed ref="navBar" :border="false" :title="title" left-text="" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <slot slot="right" name="right"></slot>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  props: {
    title: String
  },
  methods: {
    onClickLeft() {
      this.$toast('成功文案')
    },
    onClickRight() {
      this.$toast('按钮')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
