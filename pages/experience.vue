<template>
    <div class="pt-[6.5rem] px-0 mt-0 mx-[2rem]">
        <div class="flex flex-col items-center justify-center">
            <Heading text="02. Work Experience"/>
            <Quote
                class="fade"
                quote="I see now that the circumstances of one's birth are irrelevant; it is what you do with the gift of life that determines who you are."
                author="Mewtwo"
                source="Pokemon: The Movie."
            />
            <img class="fade md:w-[55%] md:mr-0" src="/images/pla-mining.png" alt="working experiences"/>
        </div>
        <div class="flex flex-col justify-between gap-8">
            <p class="fade text-sm mt-6 font-bogart leading-7 md:mt-2 md:w-auto">
                Over the years, I've always been proactive in gaining <u>real-world experience</u>.
                Working with industry professionals, I've adapted to <u>collaborative workflows</u>
                and familiarized myself with various <u>tech stacks</u> and <u>frameworks</u>.
                For a more comprehensive overview of my expertise, please take a look at my resume.
            </p>
            <div class="fade flex flex-row w-full items-center">
                <h2 class=" font-sentient text-2xl mr-4">Where I've Worked </h2>
                <hr class="border-[1.5px] border-black dark:border-white w-[200px] hidden md:block">
            </div>
            <Tabs class="fade"/>
        </div>
        <div class="fade flex flex-row w-full items-center">
            <h3 class="font-sentient text-2xl mr-4">Skills & Technologies </h3>
            <hr class="border-[1.5px] border-black dark:border-white w-[200px] hidden md:block">
        </div>
        <p class="fade font-bogart text-sm my-6 leading-7 md:mt-2">
            Constantly experimenting, I'm familiar with a wide array of industry-standard tools and languages.
        </p>
        <HoneycombGrid/>
    </div>
</template>

<script setup>
import skills from "~/assets/content/skills.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

console.log(skills)
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