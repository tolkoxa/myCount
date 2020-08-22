import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Start.vue'

Vue.use(VueRouter)

const routes = [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('../views/Login.vue')
        },
        {
            path: '/newuser',
            name: 'newuser',
            component: () =>
                import ('../views/Newuser.vue')
        },
        {
            path: '/newcount',
            name: 'newcount',
            component: () =>
                import ('../views/Newcount.vue')
        }
    ]
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const router = new VueRouter({
    mode: 'history',
    // eslint-disable-next-line indent
    base: process.env.BASE_URL,
    // eslint-disable-next-line indent
    routes
})

export default router