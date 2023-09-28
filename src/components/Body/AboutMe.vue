<script setup>

</script>

<template>
    <div class="flex items-center h-full lg:pl-12 w-full ">
        <div class="flex flex-col poppins-regular justify_center items-center gap-y-4 lg:my-0 lg:w-2/3 lg:items-start">
            <span class="font-bold text-3xl text-blackblue uppercase">kristian martínez</span>
            <span class=" text-gray-100 text-xl font-semibold uppercase tracking-widest invisible lg:visible"> ingeniero informático</span>
            <p class=" text-gray-100 lg:text-left text-center font-medium lg:text-lg w-8/12 -mt-4 lg:-mt-0">
                Hola, mi nombre es Kristian. Soy Ingeniero informático apasionado por el diseño y desarrollo web
            </p>
        </div>
        <div class="flex flex-col w-1/5 items-center">
            <span class=" text-purpuose text-xl font-semibold uppercase tracking-normal invisible lg:visible">Formato PDF</span>
            <button
                class="bg-darkturquose hover:bg-purpuose font-bold py-2 px-4 rounded flex justify-center items-center text-center w-10/12 my-4"

                onclick="window.open('/cv.pdf')"
            >
                <svg
                    class="fill-current w-4 h-4 mr-2 text-gray-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                ><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <span
                    class="text-gray-100"
                >Descarga CV</span>
            </button>
        </div>
    </div>
</template>

<style scoped>


</style>
