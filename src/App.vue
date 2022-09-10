<script setup lang="ts">
import Navbar from './components/MyNavBar.vue'
import Footer from './components/MyFooter.vue'
import Social from './components/MySocialNetworks.vue'

</script>

<template>
  
  <div class="bg-blue-900 h-full">
  <Navbar />
  <Social />
    <router-view />
  <Footer />
  </div>
</template>
