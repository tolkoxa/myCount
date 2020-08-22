<template>
    <div class="page-top">
        <p class="logo-text">
          <router-link to="/" class="logo-link">myCount</router-link>
          </p>
        <Checklogin/>
    </div>
</template>

<script>
import Checklogin from '@/components/Checklogin.vue'
export default {
  components: {
    Checklogin
  }
}
</script>

<style lang="scss" scoped>
.page-top {
  margin: 0 0 0 0;
  padding: 0 10px 0 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #2E87F0;
  width: 100%;
  height: 50px;
}

.logo-text {
  font-family: 'Comfortaa', cursive;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
  color: #FFFFFF;
}

.logo-link {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}
</style>
