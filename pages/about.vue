<script setup>
    useSeoMeta({
        title: 'About'
    })
</script>

<template>
    <PageBanner uppertext="Hi there!" title="I'm Mark Paul Cañeda" />

    <section class="pb-16">
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 md:items-center lg:max-w-5xl mx-auto">
                <img class="w-full md:h-2/3 object-cover object-top rounded-2xl dark:brightness-75" src="~/assets/img/me.png" data-aos="fade-up" data-aos-duration="500" loading="lazy" alt="Mark Paul" />
                <div class="space-y-6" data-aos="fade-up" data-aos-duration="1000">
                    <p class="text">
                        I'm a web developer who works with teams from around the globe to build and maintain high-quality websites.
                    </p>
                    <p class="text">
                        I have been a web developer for 5 years, and I am passionate about creating websites that are accessible and user-friendly for everyone.
                    </p>
                    <p class="text">
                        I create visually appealing and user-friendly websites that are easy for your team to update and deliver a seamless experience for your customers.
                    </p>
                </div>
            </div>
        </div>
 
        <div class="container">
            <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-24 items-center mt-6 md:mt-0">
                <div class="space-y-6" data-aos="fade-up" data-aos-duration="500">
                    <p class="text">
                        I adapt my approach to the specific needs of each team I work with. I know that there is no one-size-fits-all solution, and I am always focused on getting the best possible results for the team at hand.
                    </p>

                    <p class="text">
                        I design solutions that can grow with your team and are easy to use, even without a lot of training. I can help you with whatever you need, and I'll always be there to make improvements as needed.
                    </p>

                    <p class="text">
                        Here's just a few of the tools I’ve worked with in the past. I’m always open to adding more to this list if they will help the project in need.
                    </p>
                </div>
                <div class="grid grid-cols-5 gap-5 bg-gray-50 p-4 md:p-8 rounded-xl" data-aos="fade-up" data-aos-duration="1000">
                    <nuxt-img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="100%" class="scale-100 transition-all duration-300 hover:scale-125 ease-in-out" alt="Tailwindcss" />
                    <nuxt-img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg" width="100%" class="scale-100 transition-all duration-300 hover:scale-125 ease-in-out" alt="Vuejs" />
                    <nuxt-img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg" width="100%" class="scale-100 transition-all duration-300 hover:scale-125 ease-in-out" alt="nuxt" />
                    <nuxt-img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="100%" class="scale-100 transition-all duration-300 hover:scale-125 ease-in-out" alt="Vite" />
                    <nuxt-img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg" width="100%" class="scale-100 transition-all duration-300 hover:scale-125 ease-in-out" alt="Laravel" />
                    <nuxt-img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="100%" class="scale-100 transition-all duration-300 hover:scale-125 ease-in-out" alt="HTML5" />
                    <nuxt-img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="100%" class="scale-100 transition-all duration-300 hover:scale-125 ease-in-out" alt="CSS3" />
                    <nuxt-img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="100%" class="scale-100 transition-all duration-300 hover:scale-125 ease-in-out" alt="Javascript" />
                    <nuxt-img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="100%" class="scale-100 transition-all duration-300 hover:scale-125 ease-in-out" alt="Sass" />
                    <nuxt-img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="100%" class="scale-100 transition-all duration-300 hover:scale-125 ease-in-out" alt="MySQL" />
                    <nuxt-img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="100%" class="scale-100 transition-all duration-300 hover:scale-125 ease-in-out" alt="Bootstrap" />
                    <nuxt-img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="100%" class="scale-100 transition-all duration-300 hover:scale-125 ease-in-out" alt="Figma" />
                    <nuxt-img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="100%" class="scale-100 transition-all duration-300 hover:scale-125 ease-in-out" alt="Nodejs" />
                    <nuxt-img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="100%" class="scale-100 transition-all duration-300 hover:scale-125 ease-in-out" alt="Git" />
                    <nuxt-img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg" width="100%" class="scale-100 transition-all duration-300 hover:scale-125 ease-in-out" alt="jQuery" />
                </div>
            </div>
        </div>
    </section>

    <CTA />
</template>