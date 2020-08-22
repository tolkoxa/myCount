<template>
  <div id="app" class="wrapper">
    <Mainpage/>
  </div>
</template>

<script>
import Mainpage from '@/views/Mainpage.vue'

export default {
  components: {
    Mainpage
  },
  data() {
    return {
        newCount:[]
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  box-sizing: border-box;
}
</style>
