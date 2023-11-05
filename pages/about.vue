<template>
    <div class="pt-[6.5rem] px-0 mt-0 mx-[2rem] w-fit">
        <div class="flex flex-col items-center justify-center">
            <Heading text="01. My Journey"/>
            <Quote 
                class="fade"
                quote="Now, what did you say your name was? <player>, are you ready?
                Your very own Pokémon legend is about to unfold. You'll face fun times and tough challenges. 
                A world of dreams and adventures with Pokémon awaits! Let's go!"
                author="Professor Oak"
                source="Pokémon Yellow"
            />
            <nuxt-img format="webp" class="fade mt-4 md:w-[60%] md:mr-0" src="/images/pla-camp.png" alt="camp"/>
        </div>
        <div class="flex flex-col justify-between w-full md:items-center gap-8">
            <p class="fade text-sm mt-6 font-poppins leading-7 md:mt-2 md:w-auto">
                Hey, Henry here!
                My introduction to programming came from coding with <i>TI-Basic</i> on the TI-84 calculator, which surprisingly taught me many <i>core programming principles</i>!
                This experience sparked my interest, leading me to learn <i>Python</i> as my first programming language.
                Many of my early projects were bots made using <i>Discord.py</i>, an API wrapper for Discord. 
                However, in recent years, I have been much more interested in <i>machine learning and web development</i>. 
                In fact, this website was built using <i>Nuxt.js and Tailwind CSS!</i>
            </p>
            <Progess class="flex-wrap justify-center"/>
            <h2 class="fade font-poppins text-lg italic self-start">Excelsior. Ever Upward.</h2>
            <div class="flex flex-col-reverse md:flex-row gap-[2.75rem] mt-2 mb-4">
                <p class="fade text-sm mt-6 font-poppins leading-7 md:mt-2 md:w-auto">
                    <i>Excelsior</i>—my guiding principle from the vibrant streets of NYC, deeply resonates with my approach to programming.
                    With each project, I strive to learn something new, push boundaries, and deliver exceptional web experiences.
                    The future holds <i>endless possibilities</i>, and I can't wait to see where this journey takes me.
                </p>
                <nuxt-img format="webp" class="fade w-[225px] h-fit self-center md:w-1/3 md:h-auto aspect-auto rounded md:mr-6" src="/images/pbw-promo-artwork.jpg" alt="childhood"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from "gsap";
onMounted(() => {
    gsap.from(".fade", {
        y:50,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.25,
        ease: 'power1.out'
    })
})
</script>