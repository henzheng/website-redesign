<template>
    <header class="flex top-0 ml-8 fixed w-full max-w-[768px] m-auto z-20">
        <nav class="flex pt-10 pb-4 gap-5 w-full font-poppins items-center
                    bg-no-repeat bg-fixed bg-cover 
                    bg-[linear-gradient(hsla(0,0%,100%,0.925),hsla(0,0%,100%,0.925)),url('/images/sinnoh.jpg')]
                    dark:bg-[linear-gradient(rgba(0,0,0,0.925),rgba(0,0,0,0.925)),url('/images/sinnoh.jpg')]">
            <ul class="flex flex-row gap-5">
                <li><NuxtLink class="hover-underline-animation" to="/about">About</NuxtLink></li>
                <li><NuxtLink class="hover-underline-animation" to="/experience">Experience</NuxtLink></li>
                <li><NuxtLink class="hover-underline-animation" to="/projects">Projects</NuxtLink></li>
                <li><NuxtLink class="hover-underline-animation" to="/blog">Blog</NuxtLink></li>
                <li><NuxtLink class="hover-underline-animation" to="/contact">Contact</NuxtLink></li>
                <li><a class="hover-underline-animation" href="/resume.pdf">Resume</a></li>
            </ul>
            <div class="flex flex-row gap-3 items-center ml-auto">
                <Icon v-if="isLightTheme" class="text-xl cursor-pointer transition ease-in-out hover:rotate-45" name="material-symbols:dark-mode" @click="changeTheme"/>
                <Icon v-else class="text-xl cursor-pointer text-white transition ease-in-out hover:rotate-45" name="material-symbols:light-mode" @click="changeTheme"/>
                <NuxtLink to="/">
                    <img class="w-6 h-6 transition ease-in-out hover:animate-bounce" src="/images/pokeball.png" alt="pokeball">
                </NuxtLink>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
const isLightTheme = ref(true)

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

onMounted(() => {
    if(localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
        isLightTheme.value = false;
    } else {
        document.documentElement.classList.remove("dark");
        isLightTheme.value = true;
    }
})
</script>

<style scoped>
.background {
    background: linear-gradient(hsla(0,0%,100%,0.925),hsla(0,0%,100%,0.925)), url('/images/sinnoh.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
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
    background: black;
    transition: width .2s ease
}

.hover-underline-animation:hover:after {
    width: 100%;
    left: 0;
    background: black;
}

</style>