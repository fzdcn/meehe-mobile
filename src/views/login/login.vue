<template>
  <div class="login">
    <child5>
      <template v-slot:header="{head}">
        {{head}}
      </template>
      <!-- <template v-slot:fruit="myfruit">
        <ul>
          <li v-for="(item,index) in myfruit.fruits">{{item}}</li>
        </ul>
      </template> -->
    </child5>
    <h1>This is an login</h1>
  </div>
</template>
<script>
import child5 from './child5'
export default {
  data() {
    return {
      activeName: 'footer'
    }
  },
  components: {
    child5
  }
}
</script>
