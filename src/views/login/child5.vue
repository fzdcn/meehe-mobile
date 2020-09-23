<template>
  <div class="child">
    <slot name="header" :head="headText" :color="footText">张三</slot>
    <slot name="fruit" :fruits="fruitList">2222</slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headText: '这是headText',
      footText: 'red',
      fruitList: ['苹果', '香蕉', '梨', '西瓜', '葡萄', '哈密瓜']
    }
  }
}
</script>