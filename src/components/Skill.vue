<template>
    <div class="">
        <div class="text-white text-xl">
            {{ name }}
        </div>
        <ProgressBar
            class="my-4"
            :number="number"
        />
    </div>
</template>

<script setup>
import ProgressBar from './ProgressBar.vue'
import { defineProps } from 'vue'

defineProps({
    number: {
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
