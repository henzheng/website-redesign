<template>
    <div class="pt-[6.5rem] px-0 pb-[5.5rem] mt-0 mx-[2rem]">
        <div class="text-[3rem] mr-auto flex flex-col gap-2">
            <div class="flex flex-col md:flex-row items-center gap-[0.35rem] justify-between">
                <div class="flex flex-col justify-center gap-1">
                    <h1 class="font-sentient"><span class="font-sentient text-xl">Hey I'm</span><br><SplitText #id="reveal" text="Henry Zheng"/></h1>
                    <h2 class="text-xl font-sentient">Programmer, Tech Enthusiast</h2>
                    <span class="hidden md:inline-block text-lg font-sentient"> CS & Econ at
                        <a  target="_blank"
                            class="text-[#00a6ed] inline-block transition ease-in-out hover:translate-y-[-2.5px]" 
                            href="https://yale.edu/">Yale🎓
                        </a>
                    </span>
                </div>
                <img class="w-1/2 aspect-square md:w-[28%]" src="/images/profile.png" alt="avatar"/>
            </div>
        </div>
        <div class="flex flex-col items-center gap-4 mt-[2.25rem]">
            <p class="text-sm font-poppins leading-7">
                Henry is an aspiring <u>software engineer</u> from NYC with a passion for creating <u>engaging, accessible apps for the web.</u>
                With over four years of coding experience, he specializes in <u>full-stack web development</u>.
                Recently, Henry is interested in <u>machine learning</u> and <u>competitive programming</u>.
                Thanks for visiting!
            </p>
            <nav class="font-poppins text-sm mt-[1.5rem] self-start">
                <ul class="flex flex-col gap-[0.375rem]" v-for="link in data">
                    <li class="flex flex-row gap-2 pt-4">
                        <div>{{ link.emoji }}</div>
                        <NuxtLink class="underline underline-offset-2 transition-transform duration-300 hover:translate-x-4" :to="link.url">{{ link.text }}</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import data from "~/assets/content/links.json";
console.log(data);
</script>