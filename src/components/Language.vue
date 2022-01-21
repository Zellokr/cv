<template>
    <div class="flex justify-between w-full text-gray-200 tracking-wide">
        <span>{{ name }}</span>
        <Rating :value="rate" />
    </div>
</template>

<script setup>
import Rating from '@/components/Rating.vue'
import { defineProps } from 'vue'

defineProps({
    rate: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})
</script>

<style scoped></style>
