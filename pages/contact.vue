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
            <p class="fade text-sm font-nunito leading-7 text-gray-700 dark:text-gray-300 max-w-4xl text-center">
                So, what's next?
                Please send me an email if you want to get in touch!
                I'll get back to you as soon as possible.
            </p>
            
            <!-- Email Section -->
            <div class="fade flex flex-col md:flex-row items-start gap-12 mt-12 mb-8 w-full max-w-6xl">
                <div class="flex flex-col gap-8 flex-1">
                    <h3 class="font-sentient text-2xl text-gray-800 dark:text-gray-200">Contact Information</h3>
                    
                    <div class="flex flex-col gap-6">
                        <div class="flex flex-col gap-2">
                            <span class="text-sm font-nunito leading-7 text-gray-600 dark:text-gray-400 uppercase tracking-wide">Personal</span>
                            <a href="mailto:henryzheng1227@gmail.com" 
                               class="text-lg font-nunito text-[#00a6ed] hover:underline transition-all duration-300 hover:translate-x-2">
                                henryzheng1227<span class="mx-1">[at]</span>gmail<span class="mx-1">[dot]</span>com
                            </a>
                        </div>
                        
                        <div class="flex flex-col gap-2">
                            <span class="text-sm font-nunito leading-7 text-gray-600 dark:text-gray-400 uppercase tracking-wide">School</span>
                            <a href="mailto:henry.p.zheng@yale.edu" 
                               class="text-lg font-nunito text-[#00a6ed] hover:underline transition-all duration-300 hover:translate-x-2">
                                henry<span class="mx-1">[dot]</span>p<span class="mx-1">[dot]</span>zheng<span class="mx-1">[at]</span>yale<span class="mx-1">[dot]</span>edu
                            </a>
                        </div>
                    </div>
                </div>
                
                <img class="fade w-2/3 md:w-[280px] rounded self-center md:self-start" src="/images/alola.png" alt="alola"/>
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