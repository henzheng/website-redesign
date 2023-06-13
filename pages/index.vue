<template>
    <header class="flex justify-end pt-16 px-8 fixed">
        <nav class="flex gap-5 ml-auto w-[300px]">
            <NuxtLink to="/">About</NuxtLink>
            <NuxtLink to="/">Projects</NuxtLink>
            <NuxtLink to="/">Blog</NuxtLink>
        </nav>
    </header>
    <div class="pt-[6.5rem] px-0 pb-[5.5rem] mt-0 mx-[2rem]">
        <div class="text-[3rem] mr-auto">
            <span class="text-base font-nunito">Hey I'm</span>
            <h1 class="bg-gradient-to-r text-transparent bg-clip-text from-green-500 to-blue-700 font-web">Henry Zheng</h1>
        </div>
        <div class="flex items-center gap-[0.35rem] text-2xl font-light">
            <h2>
                Programmer, Tech Enthusiast
                <br>
                <span class="text-base font-web underline underline-offset-2">Currently a student @ Staten Island Technical High School 🎓</span>
            </h2>
        </div>
        <div class="mt-[2.25rem] text-base font-web leading-[30px]">
            Hello, my name is Henry! I'm a high school student aspiring to be a software engineer.
            I was introduced to the world of programming through the TI-84 Calculator. 
            Surprisingly, messing around with TI-Basic teaches you a lot of core programming principles!
            After this experience sparked my curiousity, I went on to learn Python as my first programming language. 
            Many of my early projects were Discord bots made using Discord.py, an API wrapper for Discord. 
            However, recently I have been much more interested in web development and machine learning. 
            For instance, this website was built using Nuxt.js and Tailwind CSS!
        </div>
    </div>
</template>