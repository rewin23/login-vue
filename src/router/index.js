import Vue    from 'vue'
import Router from 'vue-router'

import Login    from './../components/Protect'
import Upload   from './../components/Example'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component:Upload,
            name: Upload,
            meta: {
               requiresAuth: true
            } 
        },
        {
            path:'/login',
            component: Login,
            name: Login

        }

    ],
    linkActiveClass: "active",
    mode: "history"
})