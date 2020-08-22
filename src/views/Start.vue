<template>
  <div class="main">
    <div>
      <p class="text">Сервис myCount — универсальный счётчик для чего угодно: стаканов выпитой воды, комплиментов коллегам или звонков потенциальным клиентам. Всё то, что вам действительно нужно считать.</p>
      <p class="text">Счётчиков может быть сколько угодно. Каждый раз, когда нужное действие выполнено &#151; просто нажми на кнопку &laquo;Добавить&raquo;</p>
    </div>
    <ButtonNewCount/>
  </div>
</template>

<script>
import ButtonNewCount from '@/components/ButtonNewCount.vue'
export default {
  components:{
    ButtonNewCount
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin: 0 auto;
  padding: 25px;
  box-sizing: border-box;
  height: 90vh;
}

.text {
  margin: 0 0 10px 0;
  padding: 0 0 0 0;
  width: 90%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 400;
}
</style>
