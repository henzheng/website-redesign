<template>
    <div class="pt-[6.5rem] px-0 pb-[5.5rem] mt-0 mx-[2rem]">
        <div class="text-[3rem] mr-auto flex flex-col gap-2">
            <div class="flex flex-col md:flex-row items-center gap-[0.35rem] justify-between">
                <div>
                    <h1 class="font-poppins"><span class="font-poppins text-base">Hey I'm</span><br>Henry Zheng</h1>
                    <h2 class="text-xl font-poppins">Programmer, Tech Enthusiast</h2>
                    <span class="hidden md:inline-block text-base font-poppins">Currently a student 
                        <a 
                            class="text-[#00a6ed] inline-block transition ease-in-out hover:translate-y-[-2.5px]" 
                            href="https://siths.org/">@ Staten Island Technical High School 🎓
                        </a>
                    </span>
                    <span class="text-base md:hidden font-poppins whitespace-nowrap mt-[-3rem]">Currently a student 
                        <a 
                            class="text-[#00a6ed] inline-block transition ease-in-out hover:translate-y-[-2.5px]" 
                            href="https://siths.org/">@ Staten Island Tech 🎓
                        </a>
                    </span>
                </div>
                <nuxt-img format="webp" class="w-1/2 aspect-square md:w-[28%]" src="/images/profile.png" alt="avatar"/>
            </div>
        </div>
        <div class="flex flex-col items-center gap-4 mt-[2.25rem]">
            <p class="text-sm font-poppins leading-7">
                Welcome to my portfolio website!
                I'm Henry, a high school student from NYC with a strong ambition to become a skilled software engineer.
                <i>I aim to create engaging, accessible apps for the web.</i>
                With over 4 years of coding experience, I specialize in <i>web development</i>, and more recently, <i>machine learning</i>.
                My goals this upcoming year include getting better at <i>competitive programming</i> and familiarizing myself with <i>C++.</i>
                Thanks for visiting!
            </p>
            <nav class="font-poppins text-base mt-[1.5rem] self-start">
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