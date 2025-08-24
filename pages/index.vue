<template>
    <div class="pt-[6.5rem] px-8 pb-[5.5rem] mt-0 mx-auto max-w-6xl">
        <div class="mr-auto flex flex-col gap-6">
            <div class="flex flex-col md:flex-row items-start md:items-center gap-8 md:justify-between">
                <div class="flex flex-col justify-center gap-3">
                    <h1 class="font-sentient text-4xl leading-tight"><span class="font-sentient text-xl block mb-1">Hey I'm</span><SplitText text="Henry Zheng"/></h1>
                    <h2 class="text-xl font-sentient text-gray-700 dark:text-gray-300">Software Engineer & Amazon Scholar</h2>
                    <span class="hidden md:inline-block text-lg font-sentient text-gray-600 dark:text-gray-400"> CS & Econ at
                        <a  target="_blank"
                            class="text-[#00a6ed] inline-block transition ease-in-out hover:translate-y-[-2.5px]" 
                            href="https://yale.edu/">Yale🎓
                        </a>
                    </span>
                </div>
                <img class="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow-lg self-center md:self-auto" src="/Henry-Zheng.jpeg" alt="Henry Zheng headshot"/>
            </div>
        </div>
        <div class="flex flex-col items-start gap-8 mt-12">
            <p class="text-sm font-nunito leading-7 text-gray-700 dark:text-gray-300 max-w-4xl">
Henry is a software engineer studying Computer Science and Economics at Yale University.
                As an Amazon Future Engineer Scholar, he develops scalable web applications and AI systems.
                His experience spans full-stack development, cloud infrastructure, and machine learning platforms.
                Currently building the next generation of intelligent software solutions.
            </p>
            <nav class="font-nunito text-base mt-8 self-start w-full">
                <ul class="flex flex-col gap-6" v-for="(link, index) in data" :key="index">
                    <li class="flex flex-row items-center py-2">
                        <NuxtLink class="text-gray-800 dark:text-gray-200 font-medium underline underline-offset-4 decoration-2 decoration-blue-500/50 transition-all duration-300 hover:translate-x-3 hover:text-blue-600 hover:decoration-blue-600 dark:hover:text-blue-400" :to="link.url">{{ link.text }}</NuxtLink>
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