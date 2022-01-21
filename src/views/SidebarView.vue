<script setup>
import Photo from '../components/Sidebar/Photo.vue'
import Description from '../components/Sidebar/Description.vue'
</script>

<template>
    <div class="flex flex-col items-center lg:w-1/5  py-4 bg-purpuose lg:rounded-t-full relative z-10 ">
        <Photo />
        <Description />
    </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
