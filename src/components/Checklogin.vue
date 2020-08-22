<template>
    <div class="_inactive">
<p class="text">
    <router-link to="login" class="link">
        Вход&nbsp;/&nbsp;регистрация
    </router-link>
</p>
    </div>
</template>

<style lang="scss" scoped>
.text {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #fff;
}

.link {
    text-decoration: none;
    color: #fff;
    &:visited {
        color: #fff;
    }
    &:hover{
        color: #000;
        text-decoration: none;
    }

}

._inactive {
    display: none;
}
</style>
