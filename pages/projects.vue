<script setup>
    import { storeToRefs } from 'pinia'
    import { useProjectStore } from '@/stores/project'

    useSeoMeta({
        title: 'Projects'
    })

    const store = useProjectStore()
    const { projects } = storeToRefs(store)
</script>

<template>
    <PageBanner title="Projects" />

    <section class="pb-24">
        <div class="container">
            <div class="mt-16 md:mt-24 space-y-24">
                <div v-for="project in projects" :key="project.title" class="md:flex md:items-center md:gap-10 group">
                    <div class="mt-4 lg:w-1/2 lg:mt-0" data-aos="fade-up" data-aos-duration="500">
                        <div class="relative group grid h-[24rem] w-full flex-col items-end justify-start overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                            <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none transition-all duration-300 ease-in-out group-hover:scale-125" :style="`background-image: url('${project.image}')`">
                                <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/20 via-black/20"></div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-1/2 mt-6 md:mt-0" data-aos="fade-up" data-aos-duration="1000">
                        <p class="text-lg tracking-wider text-primary-500 uppercase dark:text-primary-200">
                            {{ project.category }}
                        </p>
                        <h2 class="my-3 text-4xl font-semibold text-gray-800 dark:text-gray-300 group-hover:underline">
                            {{ project.title }}
                        </h2>
                        <p class="text-base md:max-w-lg line-clamp-4 mb-8 dark:text-gray-300">
                            {{ project.description }}
                        </p>

                        <NuxtLink v-if="project.viewable" :to="project.permalink" target="__blank" rel="noopener" class="button button-primary">
                            Visit 
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.783 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h4a.75.75 0 0 1 0 1.5h-4ZM13 3.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V5.56l-5.22 5.22a.75.75 0 0 1-1.06-1.06l5.22-5.22h-4.69a.75.75 0 0 1-.75-.75Z"/></svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <CTA />
</template>