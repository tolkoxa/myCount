<template>
    <div class="container">
        <Pagetop/>
        <router-view/>
        <Pagebottom/>
    </div>
</template>

<script>
import Pagetop from '@/layouts/Pagetop.vue'
import Pagebottom from '@/layouts/Pagebottom.vue'
export default {
  components: {
    Pagetop, Pagebottom
  }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    box-sizing: border-box;
}
</style>
