<template>
  <div class="navBar">
    <van-nav-bar :title="title" left-text="" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
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
      this.Toast.success('成功文案')
    },
    onClickRight() {
      Toast('按钮')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
