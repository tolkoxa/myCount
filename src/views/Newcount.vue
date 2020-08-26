<template>
    <div class="main" @submit.prevent="onSubmit">
        <h1 class="text">Новый счётчик</h1>
        <label class="label" for="name">Название счётчика</label>
        <input class="input" type="text" id="name" v-model="name">
        <label class="label" for="unit">Еденица измерения (л., кг, шт. и т.д.)</label>
        <input class="input" type="text" id="unit" v-model="unit">
        <label class="label" for="step">Шаг (сколько за один раз)</label>
        <input class="input" type="text" id="step" v-model="step">
        <label class="label" for="target">Цель (сколько хотелось бы)</label>
        <input class="input" type="text" id="target" v-model="target">
        <button class="btn" @click="$emit('send-arr', this.newCountArr)">Добавить</button>
    </div>
</template>

<script>
export default {
  data (){
    return {
      newCountArr: {}
      }
  },
  

  methods: {
    sendDataToParent(){
      let newCountArr = {id: 1, name: this.name, unit: this.unit, step: this.step};
      this.$emit('sendArr', newCountArr)
    }
    // onSubmit(){
    //   console.log(`${this.name} --- ${this.unit} --- ${this.step} --- ${this.target} --- ${this.newCounter.length}`);
    //   // console.log(this.newCounter.length);
    //   console.log(newCounter.length);
    //   // if (this.newCounter.length == 0) {
        
    //   // }
    // }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin: 0 auto;
  padding: 25px;
  box-sizing: border-box;
  height: 90vh;
  display: flex;
  flex-direction: column;
}

h1 {
  margin: 0 0 10px 0;
  padding: 0 0 0 0;
  // width: 90%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 400;
}

.check-div {
    display: flex;
    flex-direction: row;
    margin: 0 0 10px 0;
}

.label {
  font-size: 0.9rem;
  font-family: 'IBM Plex Sans', sans-serif;
}

.input {
  margin: 0 0 12px 0;
  padding: 0 20px 0 20px;
  width: 100%;
  height: 37px;
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
  font-family: 'IBM Plex Sans', sans-serif;
  border-color: #75b1f7;
  &:focus{
    background-color: #75b1f7;
    color: #fff;
  }
}

.check-text{
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  margin: 0 0 8px 0;
  padding: 0 0 0 10px;
}

.color-green {
  color: green;
}

.color-red {
  color:red;
}

.btn {
    // margin-top: 30px;
    width: 200px;
    height: 45px;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    background-color: #2E87F0;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1.2rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: #fff;
}
</style>