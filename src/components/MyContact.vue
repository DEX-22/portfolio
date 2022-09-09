<template>
    <div class="flex flex-col p-3 m-2 p-2">
        <h2 class="text-3xl text-center text-slate-300 font-semibold m-2"> CONTACT ME </h2>
        <div class="flex flex-row ">
            <label class="flex flex-col w-1/2 mx-2">
                <span class="my-label">Firstname</span>
                <input type="text" class="my-input"/>
            </label>
            <label class="flex flex-col w-1/2 mx-2">
                <span class="my-label">Lastname</span>
                <input type="text" class="my-input"/>
            </label>
        </div>

        <label class="flex flex-col mx-2">
                <span class="my-label">Email</span>
                <input type="text" class="my-input"/>
            </label>
            <label class="flex flex-col mx-2">
                <span class="my-label">Message</span>
                <textarea rows="3" class="my-textarea"/>
            </label>
        <button class="my-button my-button-hover"> 
            <span class="pb-2">SEND</span>
            <VueFeather type="send" />
        </button>
    </div>
</template>
<style>
.my-input{
    @apply my-2 px-2 h-10 rounded-xl text-slate-200 text-2xl bg-transparent border-solid border-2 border-slate-400 ;
}
.my-textarea{
    @apply my-2 px-2 rounded-xl text-slate-200 text-2xl bg-transparent border-solid border-2 border-slate-400;
}
.my-label{
    @apply text-lg text-slate-400;
}
.my-button{
    @apply p-2 my-4 border-solid border-2 border-slate-400 rounded-xl w-1/3 m-auto text-slate-400 text-center font-bold text-lg;
}
.my-button-hover{
    @apply hover:bg-slate-400 hover:text-blue-800;
}
</style>