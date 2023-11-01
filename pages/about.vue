<script setup>
    useSeoMeta({
        title: 'About'
    })
</script>

<template>
    <PageBanner uppertext="Hi there!" title="I'm Mark Paul Cañeda" />

    <section class="pb-24">
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center lg:max-w-5xl mx-auto">
                <img class="w-full h-2/3 object-cover object-top rounded-2xl dark:brightness-75" src="~/assets/img/me.jpg" alt="">
                <div class="space-y-6">
                    <p class="text-base text-gray-700 dark:text-gray-100">
                        I’m a user experience consultant working with teams around the world to help create outstanding websites.
                    </p>
                    <p class="text-base text-gray-700 dark:text-gray-100">
                        I’ve been a developer since I started my career 5 years ago, and have always taken a deep interest in making websites the best they can be for everyone using them.
                    </p>
                    <p class="text-base text-gray-700 dark:text-gray-100">
                        Now I design and develop beautiful websites which focus on providing the best experience for everyone using them, ensuring they are easy for your team to edit while also delivering the best experience for your users.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <CTA />
</template>