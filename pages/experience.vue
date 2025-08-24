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
            <p class="fade text-sm font-nunito leading-7 text-gray-700 dark:text-gray-300 max-w-4xl">
My professional experience spans software engineering roles at leading organizations.
                I've contributed to <u>production systems</u> serving thousands of users and developed <u>scalable infrastructure</u> on AWS.
                Working alongside experienced engineers has strengthened my skills in <u>system design</u>, <u>cloud architecture</u>, and <u>full-stack development</u>.
                My resume provides detailed insights into these experiences and technical achievements.
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
        <p class="fade text-sm font-nunito leading-7 text-gray-700 dark:text-gray-300 max-w-4xl">
I work with modern technologies across the full development stack, from frontend frameworks to cloud infrastructure.
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