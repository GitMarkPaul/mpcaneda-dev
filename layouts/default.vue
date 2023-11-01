<template>
    <div class="bg-white dark:bg-gray-800">
        <div class="tab-menu fixed bottom-3 right-5 left-5 py-2 px-4 rounded-xl border shadow-sm bg-gray-100/60 backdrop-blur-md z-10 max-w-md mx-auto md:hidden flex items-center justify-around gap-4 dark:bg-gray-700/60 dark:border-gray-600" role="tab">
            <nuxt-link to="/" class="text-xs text-gray-700 flex flex-col items-center dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.55 2.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.31a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5.007a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5.007a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3 19.254v-9.31c0-.663.293-1.292.8-1.72l6.75-5.692Zm1.933 1.147a.75.75 0 0 0-.966 0L4.767 9.37a.75.75 0 0 0-.267.573v9.31c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-5.007c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.007c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-9.31a.75.75 0 0 0-.267-.573l-6.75-5.692Z"/></svg>
    
                Home
            </nuxt-link>
            <nuxt-link to="/about" class="text-xs text-gray-700 flex flex-col items-center dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.755 14a2.249 2.249 0 0 1 2.248 2.25v.575c0 .894-.32 1.759-.9 2.438c-1.57 1.833-3.957 2.738-7.103 2.738s-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.434v-.578A2.249 2.249 0 0 1 6.253 14h11.502Zm0 1.5H6.252a.749.749 0 0 0-.75.75v.577c0 .535.192 1.053.54 1.46c1.253 1.469 3.22 2.214 5.957 2.214c2.739 0 4.706-.745 5.963-2.213a2.25 2.25 0 0 0 .54-1.463v-.576a.749.749 0 0 0-.748-.749ZM12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z"/></svg>
    
                About
            </nuxt-link>
            <nuxt-link to="/projects" class="text-xs text-gray-700 flex flex-col items-center dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.001a7.25 7.25 0 0 1 7.25 7.25c0 2.096-.9 4.02-2.663 5.742a.75.75 0 0 0-.175.265l-.032.103l-1.13 4.895a2.25 2.25 0 0 1-2.02 1.737l-.173.007h-2.114a2.25 2.25 0 0 1-2.147-1.577l-.045-.167l-1.13-4.895a.75.75 0 0 0-.206-.368c-1.68-1.64-2.577-3.463-2.659-5.444l-.006-.298l.004-.24A7.25 7.25 0 0 1 12 2.002Zm2.115 16.498H9.884l.329 1.42a.75.75 0 0 0 .627.573l.103.008h2.114a.75.75 0 0 0 .7-.483l.03-.099l.328-1.419ZM12 3.501a5.75 5.75 0 0 0-5.746 5.53l-.004.22l.007.277c.076 1.563.8 3.02 2.206 4.392c.264.258.46.576.571.926l.049.178l.455 1.975h4.923l.458-1.976a2.25 2.25 0 0 1 .493-.97l.127-.133c1.404-1.373 2.128-2.828 2.204-4.392l.007-.277l-.004-.22A5.75 5.75 0 0 0 12 3.5Z"/></svg>
    
                Projects
            </nuxt-link>
            <nuxt-link to="/services" class="text-xs text-gray-700 flex flex-col items-center dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m18.492 2.33l3.179 3.18a2.25 2.25 0 0 1 0 3.182l-2.584 2.584A2.25 2.25 0 0 1 21 13.5v5.25A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25A2.25 2.25 0 0 1 5.25 3h5.25a2.25 2.25 0 0 1 2.225 1.915L15.31 2.33a2.25 2.25 0 0 1 3.182 0ZM4.5 18.75c0 .415.336.75.75.75h5.999l.001-6.75H4.5v6Zm8.249.75h6.001a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-6.001v6.75ZM10.5 4.5H5.25a.75.75 0 0 0-.75.75v6h6.75v-6a.75.75 0 0 0-.75-.75Zm2.25 4.81v1.94h1.94l-1.94-1.94Zm3.62-5.918L13.193 6.57a.75.75 0 0 0 0 1.061l3.179 3.179a.75.75 0 0 0 1.06 0l3.18-3.179a.75.75 0 0 0 0-1.06l-3.18-3.18a.75.75 0 0 0-1.06 0Z"/></svg>
    
                Services
            </nuxt-link>
        </div>
    
        <header class="dark:bg-gray-800">
            <nav class="py-8">
                <div class="container">
                    <div class="flex items-center justify-between">
                        <nuxt-link to="/" class="text-base font-medium flex items-center gap-2 dark:text-gray-100">
                            <img class="w-10" src="/logo.svg" alt="Mark Paul Cañeda">
                            Mark Paul Cañeda
                        </nuxt-link>
    
                        <div class="nav-menu flex items-center gap-4">
                            <ul class="hidden md:flex items-center gap-2">
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
                            <button type="button" class="button button-link px-3" aria-label="Dark Mode">
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="26px" viewBox="0 0 24 24" width="26px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M8.1 14.15c1.67.48 2.9 2.02 2.9 3.85 0 .68-.19 1.31-.48 1.87.48.09.97.14 1.48.14 1.48 0 2.9-.41 4.13-1.15-2.62-.92-5.23-2.82-6.8-5.86-1.59-3.06-1.55-5.91-1.04-8.1-2.57 1.33-4.3 4.01-4.3 7.1h.02c1.65 0 3.17.83 4.09 2.15z" opacity=".3"/><path d="M19.78 17.51c-2.47 0-6.57-1.33-8.68-5.43-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.61-.26 1.28-.42 1.98-.42 0-3.09 1.73-5.77 4.3-7.1-.5 2.19-.54 5.04 1.04 8.1 1.57 3.04 4.18 4.95 6.8 5.86-1.23.74-2.65 1.15-4.13 1.15-.5 0-1-.05-1.48-.14-.37.7-.94 1.27-1.64 1.64.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-.17.01-.37.02-.57.02z"/><path d="M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z"/></g></g></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    
        <main class="px-3 md:px-0">
            <slot />
        </main>
    
        <footer class="py-24 px-3 md:px-0 dark:bg-gray-800">
            <div class="container">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div class="sm:col-span-2">
                        <h2 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                            Join the newsletter
                        </h2>
    
                        <p class="text-sm text-gray-700 mt-3 lg:max-w-md dark:text-gray-100">
                            I send a monthly email newsletter to keep you informed about my latest discoveries and projects.
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
    </div>
</template>

<style lang="postcss" scoped>
.tab-menu .router-link-exact-active, .nav-menu .router-link-exact-active {
    @apply text-primary dark:text-primary-300;
}
</style>