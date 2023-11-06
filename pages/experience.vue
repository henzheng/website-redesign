<template>
    <div class="pt-[6.5rem] px-0 mt-0 mx-[2rem]">
        <div class="flex flex-col items-center justify-center">
            <Heading text="02. Working Experiences"/>
            <Quote
                class="fade"
                quote="I see now that the circumstances of one's birth are irrelevant;
                it is what you do with the gift of life that determines who you are."
                author="Mewtwo"
                source="Pokemon: The Movie."
            />
            <img class="fade md:w-[55%] md:mr-0" src="/images/pla-mining.png" alt="working experiences"/>
        </div>
        <div class="flex flex-col justify-between gap-8">
            <p class="fade text-sm mt-6 font-poppins leading-7 md:mt-2 md:w-auto">
                Over the course of my high school career, I have always been proactive in seeking out internship opportunities. 
                I've been fortunate enough to have the opportunity to work for various tech companies, where <i>I honed my programming abilities and learned to adapt to a professional environment.</i> 
                These internships have provided me with invaluable insights into the tech industry, and allowed me to work alongside experienced professionals.
                For a more comprehensive overview, take a look at my resume!
            </p>
            <div class="fade flex flex-row w-full items-center">
                <h2 class=" font-poppins text-2xl mr-4">Where I've Worked </h2>
                <hr class="border-[1.5px] border-black dark:border-white w-[200px] hidden md:block">
            </div>
            <Tabs class="fade"/>
        </div>
        <div class="fade flex flex-row w-full items-center">
            <h3 class="font-poppins text-2xl mr-4">Skills & Technologies </h3>
            <hr class="border-[1.5px] border-black dark:border-white w-[200px] hidden md:block">
        </div>
        <p class="fade font-poppins text-sm my-6 leading-7 md:mt-2">
            Constantly experimenting with different technologies when building projects, I've become familiar with a wide array of industry-standard tools and languages.
            My experience spans from coding in various web development languages and frameworks to deploying applications with Docker.
            <i>Click or hover over each icon to see what it is!</i>
        </p>
        <HoneycombGrid/>
        <!-- <div class="fade flex flex-row flex-wrap items-center mt-4 gap-y-[2rem] h-fit md:mx-0 md:w-full md:gap-y-0">
            <Badge 
                v-for="(skill, index) in skills"
                :title="skill.title"
                :imageUrl="skill.imageUrl"
                :imageName="skill.imageName"
                :description="skill.description"
                :id="index"
            />
        </div> -->
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