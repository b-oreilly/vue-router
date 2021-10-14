import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import User from './pages/User'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.base_url,
    routes: [{
        path: "/",
        name: 'home',
        component: Home
    }, {
        path: "/about",
        name: 'about',
        component: About
    }, {
        path: "/contact",
        name: 'contact',
        component: Contact
    }, {
        path: "/user/:id",
        name: 'user',
        component: User
    }
]
})