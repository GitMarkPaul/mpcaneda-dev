<script setup>
    defineProps({
        uppertext: String,
        title: String,
        subtext: String,
    })
</script>

<template>
    <section class="py-20 dark:bg-gray-800">
        <div class="container">
            <div class="md:max-w-3xl mx-auto text-center">
                <span class="text-xl text-gray-700 font-semibold dark:text-gray-100 animate__animated animate__fadeInUp"  v-if="uppertext">
                   {{ uppertext }}
                </span>
                <h1 class="text-4xl md:text-6xl text-gray-800 font-semibold leading-2 mt-7 mb-10 dark:text-gray-50 animate__animated animate__fadeInUp">
                    {{ title }}
                </h1>
                <p class="text-base text-gray-700 dark:text-gray-100 animate__animated animate__fadeInUp" v-if="subtext">
                    {{ subtext }}
                </p>
            </div>
        </div>
    </section>
</template>