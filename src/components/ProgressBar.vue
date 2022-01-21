<template>
    <div class="h-3 w-full border border-solid border-white rounded-full">
        <div
            class="h-full bg-white rounded-full"
            :style="{ width: clamp(number,0,10)*10 + '%' }"
        />
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    number: {
        type: Number,
        required: true,
        validator: value => value >= 0 && value <= 100
    }
})

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

</script>

<style scoped>



</style>
