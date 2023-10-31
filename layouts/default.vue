<template>

    <div class="fixed bottom-5 right-3 left-3 py-2 px-4 rounded-xl border shadow-sm bg-gray-100 z-10 max-w-md mx-auto md:hidden flex items-center justify-around gap-4" role="tab">
        <nuxt-link to="/" class="text-xs text-gray-700 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.55 2.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.31a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5.007a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5.007a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3 19.254v-9.31c0-.663.293-1.292.8-1.72l6.75-5.692Zm1.933 1.147a.75.75 0 0 0-.966 0L4.767 9.37a.75.75 0 0 0-.267.573v9.31c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-5.007c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.007c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-9.31a.75.75 0 0 0-.267-.573l-6.75-5.692Z"/></svg>

            Home
        </nuxt-link>
        <nuxt-link to="/about" class="text-xs text-gray-700 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.755 14a2.249 2.249 0 0 1 2.248 2.25v.575c0 .894-.32 1.759-.9 2.438c-1.57 1.833-3.957 2.738-7.103 2.738s-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.434v-.578A2.249 2.249 0 0 1 6.253 14h11.502Zm0 1.5H6.252a.749.749 0 0 0-.75.75v.577c0 .535.192 1.053.54 1.46c1.253 1.469 3.22 2.214 5.957 2.214c2.739 0 4.706-.745 5.963-2.213a2.25 2.25 0 0 0 .54-1.463v-.576a.749.749 0 0 0-.748-.749ZM12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z"/></svg>

            About
        </nuxt-link>
        <nuxt-link to="/projects" class="text-xs text-gray-700 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.001a7.25 7.25 0 0 1 7.25 7.25c0 2.096-.9 4.02-2.663 5.742a.75.75 0 0 0-.175.265l-.032.103l-1.13 4.895a2.25 2.25 0 0 1-2.02 1.737l-.173.007h-2.114a2.25 2.25 0 0 1-2.147-1.577l-.045-.167l-1.13-4.895a.75.75 0 0 0-.206-.368c-1.68-1.64-2.577-3.463-2.659-5.444l-.006-.298l.004-.24A7.25 7.25 0 0 1 12 2.002Zm2.115 16.498H9.884l.329 1.42a.75.75 0 0 0 .627.573l.103.008h2.114a.75.75 0 0 0 .7-.483l.03-.099l.328-1.419ZM12 3.501a5.75 5.75 0 0 0-5.746 5.53l-.004.22l.007.277c.076 1.563.8 3.02 2.206 4.392c.264.258.46.576.571.926l.049.178l.455 1.975h4.923l.458-1.976a2.25 2.25 0 0 1 .493-.97l.127-.133c1.404-1.373 2.128-2.828 2.204-4.392l.007-.277l-.004-.22A5.75 5.75 0 0 0 12 3.5Z"/></svg>

            Projects
        </nuxt-link>
        <button type="button" class="text-xs text-gray-700 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 24"><g fill="none"><path d="M8.667 12a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0z" fill="currentColor"/><path d="M14.668 12a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0z" fill="currentColor"/><path d="M18.918 13.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5z" fill="currentColor"/></g></svg>

            More
        </button>
    </div>

    <header class="hidden md:block">
        <nav class="py-8">
            <div class="container">
                <div class="flex items-center justify-between">
                    <nuxt-link to="/" class="text-base font-medium flex items-center gap-2">
                        <img class="w-10" src="logo.svg" alt="Mark Paul Cañeda">
                        Mark Paul Cañeda
                    </nuxt-link>

                    <div class="flex items-center gap-4">
                        <ul class="flex items-center gap-2">
                            <li>
                                <nuxt-link to="/about" class="button button-link">About</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/projects" class="button button-link">Projects</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/services" class="button button-link">Services</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/contact" class="button button-secondary">Hire me today</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <main>
        <slot />
    </main>

    <footer class="py-24">
        <div class="container">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                <div class="sm:col-span-2">
                    <h2 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                        Join the newsletter
                    </h2>

                    <p class="text-sm text-gray-700 mt-3 lg:max-w-md">
                        I email once a month to keep you updated with my new discoveries, latest projects and featured articles.
                    </p>

                    <div class="flex flex-col mx-auto gap-3 mt-6 space-y-3 md:space-y-0 md:flex-row">
                        <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-gray-100 border rounded-xl dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary-400 dark:focus:border-primary-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primary-300" placeholder="Enter your email" autocomplete="email">
                
                        <button class="button button-dark">
                            Sign up
                        </button>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-800 dark:text-white">Quick Links</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <nuxt-link to="/" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 hover:underline hover:text-primary-500">Home</nuxt-link>
                        <nuxt-link to="/about" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 hover:underline hover:text-primary-500">About</nuxt-link>
                        <nuxt-link to="/projects" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 hover:underline hover:text-primary-500">Projects</nuxt-link>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-800 dark:text-white">Industries</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <nuxt-link to="/services" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 hover:underline hover:text-primary-500">Services</nuxt-link>
                        <nuxt-link to="/contact" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 hover:underline hover:text-primary-500">Contact</nuxt-link>
                        <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 hover:underline hover:text-primary-500">Newsletter</a>
                    </div>
                </div>
            </div>
            
            <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700">
            
            <div class="flex items-center justify-center">
                <p class="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">© Copyright 2023. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
</template>