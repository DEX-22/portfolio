<script lang="ts" setup>
import { reactive } from 'vue';
import {homeStore} from '../stores/home/store'

const hStore = homeStore()

const a = reactive([
    {
        name:'Javascript',
        url:'./src/assets/logos/javascript.svg',
    },
    {
        name:'Vue',
        url:'./src/assets/logos/vue.svg',
    },
    {
        name:'Php',
        url:'./src/assets/logos/php.svg',
    },
    {
        name:'Laravel',
        url:'./src/assets/logos/laravel.svg',
    },
    {
        name:'My sql',
        url:'./src/assets/logos/mysql.svg',
    },
])

</script>
<template>
    <div class="skills-container">
        <h3 class="text-5xl w-full text-center text-slate-300 font-semibold m-3"> MY SKILLS</h3>
        <div v-for="(skill,i) in a" class="skill-card">
            <img :src="skill.url" class="skill-img">
        </div>
      <!--   <div class="skill-card">
            <img src="../assets/logos/vue.svg" class="skill-img">
        </div>
        <div class="w-32 h-32 m-2 p-3 rounded-xl bg-blue-400">
            <img src="../assets/social/coderrank.svg" alt="">
        </div>
        <div class="w-32 h-32 m-2 p-3 rounded-xl bg-blue-400">
            <img src="../assets/logos/typescript.svg" alt="">
        </div>
        <div class="w-32 h-32 m-2 p-3 rounded-xl bg-blue-400">
            <img src="../assets/javascript.svg" alt="">
        </div>
        <div class="w-32 h-32 m-2 p-3 rounded-xl bg-blue-400">
            <img src="../assets/javascript.svg" alt="">
        </div>
        <div class="w-32 h-32 m-2 p-3 rounded-xl bg-blue-400">
            <img src="../assets/javascript.svg" alt="">
        </div> -->
    </div>
</template>
<style lang="postcss" scoped>
.skills-container{
    @apply flex flex-wrap justify-center w-full h-max px-5 py-3 bg-gray-600;
}
.skill-card{
    @apply w-32 h-32 m-2 p-3 rounded-xl bg-blue-400;
}
.skill-img{
    @apply w-28
}
</style>