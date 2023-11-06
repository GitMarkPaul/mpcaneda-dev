<script setup>
    import 'animate.css';

    const colorMode = useColorMode()
</script>

<template>
    <div class="bg-white dark:bg-gray-950">
        <div class="tab-menu fixed bottom-2 right-2 left-2 py-3 px-4 rounded-2xl border shadow-sm bg-gray-100/60 backdrop-blur-md z-10 max-w-md mx-auto md:hidden flex items-center justify-around gap-4 dark:bg-gray-800/60 dark:border-gray-700 animate__animated animate__bounceInUp">
            <nuxt-link to="/" class="text-xs text-gray-700 flex flex-col items-center gap-1 dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.55 2.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.31a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5.007a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5.007a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3 19.254v-9.31c0-.663.293-1.292.8-1.72l6.75-5.692Zm1.933 1.147a.75.75 0 0 0-.966 0L4.767 9.37a.75.75 0 0 0-.267.573v9.31c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-5.007c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.007c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-9.31a.75.75 0 0 0-.267-.573l-6.75-5.692Z"/></svg>
    
                Home
            </nuxt-link>
            <nuxt-link to="/about" class="text-xs text-gray-700 flex flex-col items-center gap-1 dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.755 14a2.249 2.249 0 0 1 2.248 2.25v.575c0 .894-.32 1.759-.9 2.438c-1.57 1.833-3.957 2.738-7.103 2.738s-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.434v-.578A2.249 2.249 0 0 1 6.253 14h11.502Zm0 1.5H6.252a.749.749 0 0 0-.75.75v.577c0 .535.192 1.053.54 1.46c1.253 1.469 3.22 2.214 5.957 2.214c2.739 0 4.706-.745 5.963-2.213a2.25 2.25 0 0 0 .54-1.463v-.576a.749.749 0 0 0-.748-.749ZM12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z"/></svg>
    
                About
            </nuxt-link>
            <nuxt-link to="/projects" class="text-xs text-gray-700 flex flex-col items-center gap-1 dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.001a7.25 7.25 0 0 1 7.25 7.25c0 2.096-.9 4.02-2.663 5.742a.75.75 0 0 0-.175.265l-.032.103l-1.13 4.895a2.25 2.25 0 0 1-2.02 1.737l-.173.007h-2.114a2.25 2.25 0 0 1-2.147-1.577l-.045-.167l-1.13-4.895a.75.75 0 0 0-.206-.368c-1.68-1.64-2.577-3.463-2.659-5.444l-.006-.298l.004-.24A7.25 7.25 0 0 1 12 2.002Zm2.115 16.498H9.884l.329 1.42a.75.75 0 0 0 .627.573l.103.008h2.114a.75.75 0 0 0 .7-.483l.03-.099l.328-1.419ZM12 3.501a5.75 5.75 0 0 0-5.746 5.53l-.004.22l.007.277c.076 1.563.8 3.02 2.206 4.392c.264.258.46.576.571.926l.049.178l.455 1.975h4.923l.458-1.976a2.25 2.25 0 0 1 .493-.97l.127-.133c1.404-1.373 2.128-2.828 2.204-4.392l.007-.277l-.004-.22A5.75 5.75 0 0 0 12 3.5Z"/></svg>
    
                Projects
            </nuxt-link>
            <nuxt-link to="/services" class="text-xs text-gray-700 flex flex-col items-center gap-1 dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m18.492 2.33l3.179 3.18a2.25 2.25 0 0 1 0 3.182l-2.584 2.584A2.25 2.25 0 0 1 21 13.5v5.25A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25A2.25 2.25 0 0 1 5.25 3h5.25a2.25 2.25 0 0 1 2.225 1.915L15.31 2.33a2.25 2.25 0 0 1 3.182 0ZM4.5 18.75c0 .415.336.75.75.75h5.999l.001-6.75H4.5v6Zm8.249.75h6.001a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-6.001v6.75ZM10.5 4.5H5.25a.75.75 0 0 0-.75.75v6h6.75v-6a.75.75 0 0 0-.75-.75Zm2.25 4.81v1.94h1.94l-1.94-1.94Zm3.62-5.918L13.193 6.57a.75.75 0 0 0 0 1.061l3.179 3.179a.75.75 0 0 0 1.06 0l3.18-3.179a.75.75 0 0 0 0-1.06l-3.18-3.18a.75.75 0 0 0-1.06 0Z"/></svg>
    
                Services
            </nuxt-link>
        </div>
    
        <header>
            <nav class="py-8 px-3 md:px-0">
                <div class="container">
                    <div class="flex items-center justify-between">
                        <nuxt-link to="/" class="text-base font-medium flex items-center gap-3 dark:text-gray-100">
                            <nuxt-img class="w-12 h-12 object-cover object-top rounded-full" src="/me.png" alt="Mark Paul" />
                            
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

                            <div v-if="colorMode.preference === 'light'">
                                <input type="radio" v-model="colorMode.preference" value="dark" id="dark" class="peer hidden [&:checked_+_label_svg]:block" />

                                <label for="dark" class="button button-link px-3 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="26px" viewBox="0 0 24 24" width="26px" fill="currentColor"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M8.1 14.15c1.67.48 2.9 2.02 2.9 3.85 0 .68-.19 1.31-.48 1.87.48.09.97.14 1.48.14 1.48 0 2.9-.41 4.13-1.15-2.62-.92-5.23-2.82-6.8-5.86-1.59-3.06-1.55-5.91-1.04-8.1-2.57 1.33-4.3 4.01-4.3 7.1h.02c1.65 0 3.17.83 4.09 2.15z" opacity=".3"/><path d="M19.78 17.51c-2.47 0-6.57-1.33-8.68-5.43-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.61-.26 1.28-.42 1.98-.42 0-3.09 1.73-5.77 4.3-7.1-.5 2.19-.54 5.04 1.04 8.1 1.57 3.04 4.18 4.95 6.8 5.86-1.23.74-2.65 1.15-4.13 1.15-.5 0-1-.05-1.48-.14-.37.7-.94 1.27-1.64 1.64.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-.17.01-.37.02-.57.02z"/><path d="M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z"/></g></g></svg>
                                </label>
                            </div>

                            <div v-else>
                                <input type="radio" v-model="colorMode.preference" value="light" id="light" class="peer hidden [&:checked_+_label_svg]:block" />

                                <label for="light" class="button button-link px-3 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="26px" viewBox="0 0 24 24" width="26px" fill="currentColor"><rect fill="none" height="24" width="24"/><circle cx="12" cy="12" opacity=".3" r="3"/><path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/></svg>
                                </label>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    
        <main class="px-3 md:px-0">
            <slot />
        </main>
    
        <footer class="py-24 px-3 md:px-0">
            <div class="container">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div class="sm:col-span-2">
                        <h2 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                            Mark Paul Cañeda
                        </h2>
    
                        <p class="text mt-3 lg:max-w-md">
                            I build stunning websites that your users will love. I work closely with you from start to finish to make sure that your vision is realized and that your users have a great experience.
                        </p>

                        <div class="flex items-center gap-2 mt-4">
                            <nuxt-link to="https://github.com/gitmarkpaul" class="button button-link px-2 py-2" target="__blank" rel="noopener noreferrer" title="Github">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32Z"/></svg>
                            </nuxt-link>

                            <nuxt-link to="https://www.linkedin.com/in/mark-paul-caneda-b5a1911a0/" class="button button-link px-2 py-2" target="__blank" rel="noopener noreferrer" title="Linkedin">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32Zm-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43c0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43Zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44c-17.74 0-28.24 12-32.91 23.69c-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44c42.13 0 74 27.77 74 87.64Z"/></svg>
                            </nuxt-link>

                            <nuxt-link to="https://www.instagram.com/markpaulacebo/" class="button button-link px-2 py-2" target="__blank" rel="noopener noreferrer" title="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32Z"/><path fill="currentColor" d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28ZM256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112Z"/></svg>
                            </nuxt-link>

                            <nuxt-link to="tel:09275942058" class="button button-link px-2 py-2" title="Whatsapp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0 0 29.78 111L32 480l118.25-30.87a223.63 223.63 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1ZM256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4l-70.17 18.32l18.73-68.09l-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52Zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78s-14.4 18-17.65 21.75s-6.5 4.16-12.07 1.38s-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26s.93-6.94-.46-9.71s-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52c-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38s39.3 59.73 95.21 83.76a323.11 323.11 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2c10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37s-5.11-3.71-10.69-6.48Z"/></svg>
                            </nuxt-link>
                        </div>
                    </div>
    
                    <div>
                        <p class="font-semibold text-gray-800 dark:text-white">Quick Links</p>
    
                        <div class="flex flex-col items-start mt-5 space-y-6">
                            <nuxt-link to="/" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 hover:underline hover:text-primary-500">Home</nuxt-link>
                            <nuxt-link to="/about" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 hover:underline hover:text-primary-500">About</nuxt-link>
                            <nuxt-link to="/projects" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 hover:underline hover:text-primary-500">Projects</nuxt-link>
                            <nuxt-link to="/services" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 hover:underline hover:text-primary-500">Services</nuxt-link>
                            <nuxt-link to="/contact" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400 hover:underline hover:text-primary-500">Contact</nuxt-link>
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