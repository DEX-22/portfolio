<script lang="ts" setup>
import {ref,computed, Ref} from 'vue'

const buttonStyle = ref('rounded-2xl align-middle bg-gray-200 px-3 my-2 mx-4 h-12')
const buttonStyleHover = ref('hover:rounded-md hover:bg-gray-500 transition ease-in-out')
let showMenu:Ref<boolean> = ref(false)

const toggleMenu = () => {
        showMenu.value = !showMenu
}

</script>
<template>
    <nav class="flex flex-row bg-slate-200 shadow-md shadow-slate-900">
             <div class="
                        flex flex-col cursor-pointer p-3 
                        content-center w-5/6
                        md:w-5/6
                        xl:w-full">
                <VueFeather  class="my-2 m-auto text-blue-900" type="cloud-rain" size="30" />
                <h3 class="text-center text-3xl text-blue-900" >Enrique Saenz</h3>
            </div>
            <div class=" flex flex-col content-center  w-1/6">
                <VueFeather type="menu" class="p-3 m-auto" size="40" />
            </div>


            <!--<div class="flex flex-row items-center justify-end w-4/5 pr-5">
                <button :class="[buttonStyle,buttonStyleHover]">
                    <a href="#"> asdasdasdasd </a>
                </button>
                <button :class="[buttonStyle,buttonStyleHover]">
                <a href="#"> XXXXXXX </a>
                </button>
                <button :class="[buttonStyle,buttonStyleHover]">
                <a href="#"> XXXXXXX </a>
                </button>
                <button :class="[buttonStyle,buttonStyleHover]">
                <a href="#"> About </a>
                </button>
            </div> -->
    </nav>
</template>
<style scoped>

</style>