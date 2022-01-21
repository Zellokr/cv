<script setup>
import About from './AboutMe.vue'
</script>

<template>
    <div class="bg-turquose lg:h-80 h-96">
        <div
            class="lg:absolute lg:top-0 lg:left-0 bg-turquose h-48 hidden lg:block"
            :style="{width: '10%', left: '10%'}"
        />
        <About />
    </div>
</template>

<style scoped></style>
