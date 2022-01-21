<template>
    <div class="flex items-end flex-col w-full font-poppins ">
        <div class="lg:w-11/12 w-full pr-4 lg:pr-0 h-10 mt-6 mb-8 flex flex-col justify-center lg:px-4 font-bold text-md ">
            <div class="flex flex-col">
                <div class="flex">
                    <component
                        :is="icons[icon]"
                        class="h-5 w-5 text-blackblue"
                    />
                    <span class="ml-2">{{ name }}</span>
                </div>
                <span class="ml-7 text-gray-500">{{ place }}</span>
                <span class="ml-7 text-gray-500">{{ date }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { AcademicCapIcon, BookOpenIcon, BriefcaseIcon } from '@heroicons/vue/solid'

const icons = { AcademicCapIcon, BookOpenIcon, BriefcaseIcon }

defineProps({
    icon: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})




</script>

<style scoped></style>
