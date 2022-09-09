<script lang="ts" setup>
import Skills from '../components/MySkills.vue'
import Contact from '../components/MyContact.vue'
</script>
<template>
    <div class="flex flex-col">
        <h2 class="title title-lg">
            Software Developer
        </h2>
        <img class="img" src="../assets/img/space1.png" alt="" width="500" height="500">
        <Skills />
        <Contact />
    </div>
</template>
<style lang="postcss" scoped>
    .title{
        @apply text-5xl mx-2 pt-5  px-3 text-end text-slate-300 ;
    }
    .title-lg{
        @apply lg:text-start text-slate-300 ;
    }
    .img{
        @apply flex flex-col m-auto;
    }
</style>