<template>
<router-link
    to="/newcount">
    <button class="btn">Добавить счётчик</button>
    </router-link>
</template>

<script>
export default {
    // components: {login},
    methods: {
        login(){
            console.log('button');
         <router-link to="newcount"/>
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    margin-top: 30px;
    width: 250px;
    height: 65px;
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