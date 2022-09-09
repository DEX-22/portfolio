import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/MyHome.vue'

const routes: RouteRecordRaw[] = [
    {
        path:'',
        redirect:{name:'Home'},
        children:[
            {
                path: 'home',
                name: 'Home',
                component: Home
            }
        ]
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
