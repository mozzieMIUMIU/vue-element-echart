import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login'
import Index from '@/components/index'

import sidebar from '@/components/sidebar'
import pageOne from '@/components/page-one'
import pageTwo from '@/components/page-two'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/',
            name: 'index',
            component: Index,
            children:[
                {
                    path:'/page-one',
                    component:pageOne
                },
                {
                    path:'/page-two',
                    component:pageTwo
                },
            ]
        },

    ]
})
