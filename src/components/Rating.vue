
<script setup>
import Star from './Star.vue';
import { defineProps } from 'vue'

defineProps({
    value: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <div class="flex">
        <Star
            v-for="n in 5"
            :key="n"
            :active="n<=value"
        />
    </div>
</template>


