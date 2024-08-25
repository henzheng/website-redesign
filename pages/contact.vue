<template>
    <div class="pt-[6.5rem] px-0 mt-0 mx-[2rem]">
        <div class="flex flex-col items-center justify-center">
            <Heading text="04. Get In Touch"/>
            <Quote
                class="fade"
                quote="You said you have a dream… That dream… Make it come true! Wonderful dreams and ideals give you the power to change the world!"
                author="N"
                source="Pokemon Black & White"
            />
            <img class="fade py-4 w-3/4 md:w-1/2" src="/images/psm-pokedex.png" alt="pokedex"/>
            <p class="fade text-sm mt-8 font-bogart leading-7 md:mt-2 md:w-auto">
                What's next?
                Send a message through social media or email if you want to get in touch!
                <u>The best way to contact me is via email.</u>
                I'm always open to new opportunities and learning experiences. 
            </p>
            <div class="flex flex-col items-center md:flex-row justify-between gap-[1rem] mt-8">
                <Form class="fade"/>
                <img class="fade w-3/4 rounded md:w-[350px]" src="/images/alola.png" alt="alola"/>
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