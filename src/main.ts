import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import VueFeather from 'vue-feather'

createApp(App)
    .use(router)
    .use(createPinia())
    .component(VueFeather.name,VueFeather)
    .mount('#app')
