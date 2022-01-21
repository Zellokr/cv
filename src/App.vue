<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Sidebar from './views/SidebarView.vue'
import Body from './views/BodyView.vue'
</script>

<template>
    <div class="lg:flex lg:flex-nowrap lg:mt-6 lg:mx-0 relative  w-full min-h-screen">
        <Sidebar />
        <Body />
    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@font-face{
    font-family: 'poppins';
    src: url('./assets/fonts/Poppins-Regular.ttf') format('truetype');
}

.poppins-regular{
    font-family: 'poppins', sans-serif;
}

</style>
