<script lang="ts" setup>
import { reactive } from 'vue';

interface skillsLogos{
    name: string,
    url: string,
}

const skills: skillsLogos[] = reactive([
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
    {
        name:'HTML',
        url:'./src/assets/logos/html5.svg',
    },
    {
        name:'CSS',
        url:'./src/assets/logos/css3.svg',
    },
    {
        name:'Node.js',
        url:'./src/assets/logos/node-js.svg',
    },
    {
        name:'Typescript',
        url:'./src/assets/logos/typescript.svg',
    },
    {
        name:'Git',
        url:'./src/assets/logos/git.svg',
    },
])

</script>
<template>
    <div class="skills-container skills-container-xl">
        <h3 class="text-5xl w-full text-center text-blue-200 font-semibold m-3"> MY SKILLS</h3>
        <div v-for="(skill,i) in skills" class="skill-card skill-card-hover">
            <img :src="skill.url" class="skill-img">
            <span class="hidden items-end text-center font-semibold">{{skill.name}}</span>
        </div>
    </div>
</template>
<style lang="postcss" scoped>
.skills-container{
    @apply flex flex-wrap justify-center w-full h-max px-5 py-3 bg-gray-600;
}
.skills-container-xl{
    @apply xl:h-96;
}
.skill-card{
    @apply grid w-32 h-32 m-2 p-3 rounded-xl bg-blue-200 cursor-pointer;
}
.skill-card-hover:hover img{
    @apply w-20  h-20 transition-all ease-in-out duration-300;
}
.skill-card-hover:hover span{
    display:block;
    transition: all ease-in-out ;
}

.skill-img{
    @apply w-28 m-auto
}
</style>