Vue.component('Pagetop',{
    template: '<div class="page-top"><p class="logo-text">myCount</p></div>'
})

Vue.component('Startpage', {
    template: '<div class="main"><p class ="text">Сервис myCount &#151; универсальный счётчик для чего угодно: стаканов выпитой воды, комплиментов коллегам или звонков потенциальным клиентам. Всё то, что вам действительно нужно считать.</p><p class ="text">Счётчиков может быть сколько угодно. Каждый раз, когда нужное действие выполнено &#151; просто нажми на кнопку &laquo;Добавить&raquo;</p><ButtonNewCount></ButtonNewCount></div>'
})

Vue.component('Pagebottom',{
    template: '<div class="footer"><p class="footer-text">2020</p><p class="footer-text">Сделал <a class="footer-link" href="https://tolkoxa.ru">tolkoxa.ru</a></p></div>'
})

Vue.component('ButtonNewCount',{
    template: '<button class="btn">Добавить счётчик</button>'
})

let vm = new Vue({
    el: '#app',
    data: {}
})