<template>
    <div class="pt-[6.5rem] px-0 mt-0 mx-[2rem] w-fit">
        <div class="flex flex-col items-center justify-center">
            <Heading text="01. My Journey"/>
            <Quote 
                class="fade"
                quote="Now, what did you say your name was? <player>, are you ready? You'll face fun times and tough challenges. A world of dreams and adventures awaits! Let's go!"
                author="Professor Oak"
                source="Pokémon Yellow"
            />
            <img class="fade mt-4 md:w-[60%] md:mr-0" src="/images/pla-camp.png" alt="camp"/>
        </div>
        <div class="flex flex-col justify-between w-full md:items-center gap-8">
            <p class="fade text-sm mt-6 font-bogart leading-7 md:mt-2 md:w-auto">
                Hey, Henry here!
                My intro to programming came from coding on the TI-calculator.
                This experience sparked my interest in tech, leading me to learn <u>Python</u> as my first programming language.
                Many of my early projects are bots made using <u>Discord.py</u>, an API wrapper for Discord. 
                In recent years, however, I've been more interested in all aspects of <u>web development</u>. 
                Fun fact: this website was built using <u>Nuxt.js</u> and <u>TailwindCSS</u>!
            </p>
            <Progess class="flex-wrap justify-center"/>
            <div class="flex flex-col md:flex-row gap-[2.75rem] w-full">
                <div class="flex flex-col gap-6 md:gap-[2rem] mb-4">
                    <h2 class="fade font-sentient text-2xl italic self-start mt-0">Excelsior. Ever Upward.</h2>
                    <img class="md:hidden fade w-[225px] h-fit self-center aspect-auto rounded" src="/images/pxy-lumiose-city-street.jpg" alt="city street"/>
                    <p class="fade text-sm mt-6 font-bogart leading-7 md:mt-2 md:w-auto">
                        "Excelsior"—my motto from the vibrant streets of New York—reflects my approach to programming.
                        With each project, I strive to <u>learn something new, push boundaries, and deliver exceptional work.</u>
                        The future holds endless possibilities for growth, and I can't wait to see where this journey takes me.
                    </p>
                </div>
                <img class="hidden md:block fade w-[15vw] max-w-[20rem] self-center rounded" src="/images/pxy-lumiose-city-street.jpg" alt="city street"/>
            </div>
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