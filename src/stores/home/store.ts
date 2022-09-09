import {defineStore} from 'pinia'

export const homeStore = defineStore('home',{
    state:()=>({
        skills:[
            {
                name:'Vue',
                url:'./assets/logos/vue.svg',
            }
        ],

    }),
    getters:{
        getSkills:({skills}) =>skills,
    },
})

