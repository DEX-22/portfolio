<script setup lang="ts">
import Navbar from './components/MyNavBar.vue'
import Footer from './components/MyFooter.vue'
import Social from './components/MySocialNetworks.vue'
import Sidebar from './components/MySidebar.vue'

</script>

<template>
  
  <div class="bg-blue-900 h-full min-h-screen">
    <Navbar />
    <Social />
    <router-view />
    <Sidebar />
    <Footer class="bottom-0 relative"/>
  </div>
</template>
