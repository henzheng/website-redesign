<template>
    <header class="flex justify-end pt-10 px-8 fixed max-w-[768px] m-auto">
        <nav class="flex gap-5 ml-auto w-fit font-poppins background">
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/experience">Experience</NuxtLink>
            <NuxtLink to="/projects">Projects</NuxtLink>
            <NuxtLink to="/blog">Blog</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
            <a href="/resume.pdf">Resume</a>
        </nav>
    </header>
</template>

<style scoped>
.background {
    background: linear-gradient(hsla(0,0%,100%,0.925),hsla(0,0%,100%,0.925)), url('/images/sinnoh.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
</style>