<script setup>
import SingleDesc from '../components/Body/SingleDesc.vue';
import { educations, experiences } from '@/utils/data.js'

</script>

<template>
    <div class="flex flex-col">
        <div class="flex items-end flex-col w-full">
            <div class="bg-darkturquose w-11/12 h-10 rounded-l-full mt-8 flex items-center mb-2">
                <span class="uppercase font-semibold text-lg text-gray-200 tracking-widest mx-4">estudios</span>
            </div>
        </div>
        <SingleDesc
            v-for="(education,ind) in educations"
            :key="ind"
            :icon="education.icon"
            :name="education.name"
            :place="education.place"
            :date="education.date"
        />

        <div class="flex items-end flex-col w-full">
            <div class="bg-darkturquose w-11/12 h-10 rounded-l-full mt-4 flex items-center mb-2">
                <span class="uppercase font-semibold text-lg text-gray-200 tracking-widest mx-4">experiencia</span>
            </div>
        </div>
        <SingleDesc
            v-for="(experience,ind) in experiences"
            :key="ind"
            :icon="experience.icon"
            :name="experience.name"
            :place="experience.place"
            :date="experience.date"
        />
        <div class="flex items-end flex-col w-full">
            <div class="bg-darkturquose w-11/12 h-10 rounded-l-full mt-4 flex items-center mb-2">
                <span class="uppercase font-semibold text-lg text-gray-200 tracking-widest mx-4">proyectos personales</span>
            </div>
        </div>
        <div class="flex items-end flex-col w-full font-poppins ">
            <div class="lg:w-11/12 w-full pr-4 lg:pr-0 h-10 mt-6 mb-8 flex flex-col justify-center lg:px-4 font-bold text-md ">
                <div class="flex flex-col">
                    <div class="flex justify-around">
                        <a href="https://gameboycsskr.netlify.app/"> Gameboy con CSS y JS (Con animación de encendido)</a>
                        <a href="https://linux-ts.netlify.app/"> Ubuntu con CSS y JS (Typescript) </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
