<template>
    <div class="footer">
        <p class="footer-text">2020</p>
        <p class="footer-text">Сделал <a class="footer-link" href="https://tolkoxa.ru">tolkoxa.ru</a></p>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    margin: 0 0 0 0;
    padding: 0 15px 0 15px;
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #D4D4D4;
}

.footer-text {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
}

.footer-link {
    text-decoration: underline;
    color: #000;
    cursor: pointer;
    &:visited {
        color: #000;
    }
    &:hover{
        color:#2E87F0;
    }
}
</style>
