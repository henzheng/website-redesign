<template>
    <header class="top-0 md:ml-8 fixed w-full max-w-[768px] m-auto z-20 flex">
        <!-- Hamburger Menu Button -->
        <button id="hamburger" @click="toggleMenu" aria-label="hamburger menu" class="ml-auto mr-4 mt-4 md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 z-20 bg-white/90 dark:bg-black/90 rounded-md backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60">
            <svg :class="menuOpen ? 'rotate-90' : ''" class="w-6 h-6 transition-transform transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
        <nav v-if="menuOpen" id="navbar"
            class="fixed inset-0 bg-white dark:bg-[#121212] flex flex-col w-full items-center font-nunito z-10 justify-center">
            <ul class="flex flex-col gap-8 text-2xl items-center justify-center">
                <li @click="toggleMenu"><NuxtLink class="hover-underline-animation after:bg-black dark:after:bg-white text-gray-800 dark:text-gray-200 font-nunito font-medium transition-colors duration-200" to="/">Home</NuxtLink></li>
                <li @click="toggleMenu"><NuxtLink class="hover-underline-animation after:bg-black dark:after:bg-white text-gray-800 dark:text-gray-200 font-nunito font-medium transition-colors duration-200" to="/about">About</NuxtLink></li>
                <li @click="toggleMenu"><NuxtLink class="hover-underline-animation after:bg-black dark:after:bg-white text-gray-800 dark:text-gray-200 font-nunito font-medium transition-colors duration-200" to="/experience">Experience</NuxtLink></li>
                <li @click="toggleMenu"><NuxtLink class="hover-underline-animation after:bg-black dark:after:bg-white text-gray-800 dark:text-gray-200 font-nunito font-medium transition-colors duration-200" to="/projects">Projects</NuxtLink></li>
                <li @click="toggleMenu"><NuxtLink class="hover-underline-animation after:bg-black dark:after:bg-white text-gray-800 dark:text-gray-200 font-nunito font-medium transition-colors duration-200" to="/contact">Contact</NuxtLink></li>
            </ul>
        </nav>
        <nav v-else id="navbar"
            class="hidden md:flex flex-row pt-10 pb-4 gap-5 w-full font-satoshi items-center
                    bg-no-repeat bg-fixed bg-cover 
                    bg-[linear-gradient(hsla(0,0%,100%,0.925),hsla(0,0%,100%,0.925)),url('/images/sinnoh.jpg')]
                    dark:bg-[linear-gradient(rgba(0,0,0,0.925),rgba(0,0,0,0.925)),url('/images/sinnoh.jpg')]">
            <ul class="flex flex-col md:flex-row gap-5 text-[0.85rem] md:text-base">
                <li><NuxtLink class="hover-underline-animation after:bg-black dark:after:bg-white" to="/">Home</NuxtLink></li>
                <li><NuxtLink class="hover-underline-animation after:bg-black dark:after:bg-white" to="/about">About</NuxtLink></li>
                <li><NuxtLink class="hover-underline-animation after:bg-black dark:after:bg-white" to="/experience">Experience</NuxtLink></li>
                <li><NuxtLink class="hover-underline-animation after:bg-black dark:after:bg-white" to="/projects">Projects</NuxtLink></li>
                <!-- <li><NuxtLink class="hover-underline-animation after:bg-black dark:after:bg-white" to="/blog">Blog</NuxtLink></li> -->
                <li><NuxtLink class="hover-underline-animation after:bg-black dark:after:bg-white" to="/contact">Contact</NuxtLink></li>
            </ul>
            <div class="flex flex-row gap-3 items-center ml-auto">
                <Icon v-if="isLightTheme" class="text-xl cursor-pointer transition ease-in-out hover:rotate-45" name="material-symbols:dark-mode" @click="changeTheme"/>
                <Icon v-else class="text-xl cursor-pointer text-white transition ease-in-out hover:rotate-45" name="material-symbols:light-mode" @click="changeTheme"/>
            </div>
        </nav> 
    </header>
</template>

<script setup lang="ts">
const isLightTheme = ref(true);
const menuOpen = ref(false);

function toggleMenu() {
    menuOpen.value = !menuOpen.value;
    // Prevent body scroll when menu is open
    if (menuOpen.value) {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }
}

function changeTheme() {
    isLightTheme.value = !isLightTheme.value;
    if(isLightTheme.value) {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
    }
}

// useHead({
//     script: [{
//         children: "const isLightTheme=ref(false); if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) { document.documentElement.classList.add('dark'); isLightTheme.value = false; } else { document.documentElement.classList.remove('dark'); isLightTheme.value = true; }"
//     }]
// })
onMounted(() => {
    if(localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
        isLightTheme.value = false;
    } else {
        document.documentElement.classList.remove("dark");
        isLightTheme.value = true;
    }
})

onUnmounted(() => {
    // Cleanup body overflow on component unmount
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
})
</script>

<style scoped>
.hover-underline-animation {
    position: relative;
}

.hover-underline-animation:after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 1.5px;
    right: 0;
    transition: width .2s ease
}

.hover-underline-animation:hover:after {
    width: 100%;
    left: 0;
}

</style>