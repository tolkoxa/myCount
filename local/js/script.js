Vue.component('app', {
    template: '<div id="app" class="wrapper"> <Mainpage> </Mainpage></div>'
})

Vue.component('Mainpage', {
    template: '<div class="container"><Pagetop></Pagetop><Start></Start><Pagebottom></Pagebottom></div>'
})

Vue.component('Start', {
    template: '<div class="main"><div v-if="counts_all == 0"><p class = "text">Сервис myCount &#151; универсальный счётчик для чего угодно: стаканов выпитой воды, комплиментов коллегам или звонков потенциальным клиентам. Всё то, что вам действительно нужно считать.</p><p class = "text">Счётчиков может быть сколько угодно. Каждый раз, когда нужное действие выполнено & #151; просто нажми на кнопку &laquo;Добавить&raquo;</p></div><div v-else><Newcount v-on:send-arr="get-arr"></Newcount>{{ counts_all }}</div><ButtonNewCount></ButtonNewCount></div>'
})

Vue.component('Pagetop',{
    template: '<div class="page-top"><p class="logo-text">myCount</p></div>'
})


let app = new Vue({
    el: '#app',
    data: {}
})