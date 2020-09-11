<template>
  <div class="home">
    <nav-bar :title="title"></nav-bar>
  </div>
</template>

<script>
import navBar from '@/components/navBar'
export default {
  name: 'Home',
  components: {
    navBar
  },
  data() {
    return {
      title: '影响力空间'
    }
  }
}
</script>
