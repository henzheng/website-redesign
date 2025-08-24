<template>
    <div class="pt-[6.5rem] px-8 pb-16 mt-0 mx-auto max-w-6xl">
        <!-- Hero Section -->
        <section class="flex flex-col items-center justify-center mb-16">
            <Heading text="01. My Journey"/>
            <Quote 
                class="fade"
                quote="Now, what did you say your name was? <player>, are you ready? You'll face fun times and tough challenges. A world of dreams and adventures awaits! Let's go!"
                author="Professor Oak"
                source="Pokémon Yellow"
            />
            <img class="fade mt-8 md:w-[60%] md:mr-0" src="/images/pla-camp.png" alt="camp"/>
        </section>

        <!-- Main Content -->
        <div class="flex flex-col justify-between w-full md:items-center">
            <!-- Introduction Section -->
            <section class="mb-16">
                <p class="fade text-sm font-nunito leading-7 max-w-4xl text-gray-700 dark:text-gray-300">
                    I'm Henry, a software engineer at Yale University pursuing a joint degree in Computer Science and Economics.
                    My programming journey began with calculator scripts, which led me to discover Python.
                    Early projects included Discord bots and automation tools that taught me the fundamentals.
                    Now I focus on <u>full-stack web development</u> and <u>AI systems</u>, working with technologies like React, Django, and AWS.
                    This website showcases my work using <u>Nuxt.js</u> and <u>TailwindCSS</u>!
                </p>
            </section>

            <!-- Stats Section -->
            <section class="mb-16">
                <Progess class="flex-wrap justify-center"/>
            </section>

            <!-- Philosophy Section -->
            <section class="mb-16">
                <div class="flex flex-col md:flex-row gap-12 w-full max-w-5xl">
                    <div class="flex flex-col gap-8 flex-1">
                        <h2 class="fade font-sentient text-3xl italic self-start text-gray-800 dark:text-gray-200">Excelsior. Ever Upward.</h2>
                        <img class="md:hidden fade w-[280px] h-fit self-center aspect-auto rounded-lg shadow-md" src="/images/pxy-lumiose-city-street.jpg" alt="city street"/>
                        <p class="fade text-sm font-nunito leading-7 text-gray-700 dark:text-gray-300">
                            "Excelsior" represents my commitment to continuous improvement in software engineering.
                            Each project presents opportunities to <u>master new technologies, solve complex problems, and create meaningful impact.</u>
                            From building platforms that serve thousands of users to developing cutting-edge AI systems, I'm excited about what's ahead.
                        </p>
                    </div>
                    <img class="hidden md:block fade w-[15vw] max-w-[20rem] self-center rounded-lg shadow-md" src="/images/pxy-lumiose-city-street.jpg" alt="city street"/>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    gsap.utils.toArray(".fade").forEach(element => {
        gsap.from(element, {
            y:50,
            autoAlpha: 0,
            duration: 1,
            stagger: 0.25,
            ease: 'power1.out',
            scrollTrigger: element
        })
    })
})
</script>