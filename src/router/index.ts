import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/MyHome.vue'
import About from '../views/MyAbout.vue'

const routes: RouteRecordRaw[] = [
    {
        path:'',
        redirect:{name:'Home'},
        children:[
            {
                path: 'home',
                name: 'Home',
                component: Home
            },
            {
                path: 'about',
                name: 'About',
                component: About
            }
        ]
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
