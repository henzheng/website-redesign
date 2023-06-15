<template>
    <header class="flex top-0 ml-8 fixed w-full max-w-[768px] m-auto z-20">
        <nav class="flex pt-10 pb-4 gap-5 w-full font-poppins items-center background">
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/experience">Experience</NuxtLink>
            <NuxtLink to="/projects">Projects</NuxtLink>
            <NuxtLink to="/blog">Blog</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
            <a href="/resume.pdf">Resume</a>
            <div class="flex flex-row gap-3 items-center ml-auto">
                <Icon v-if="isLightTheme" class="text-xl cursor-pointer" name="material-symbols:dark-mode" @click="changeTheme"/>
                <Icon v-else class="text-xl cursor-pointer text-white" name="material-symbols:light-mode" @click="changeTheme"/>
                <NuxtLink to="/">
                    <img class="w-6 h-6" src="/images/pokeball.png" alt="pokeball">
                </NuxtLink>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
const isLightTheme = ref(true)

function changeTheme() {
    isLightTheme.value = !isLightTheme.value;
}
</script>

<style scoped>
.background {
    background: linear-gradient(hsla(0,0%,100%,0.925),hsla(0,0%,100%,0.925)), url('/images/sinnoh.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
</style>