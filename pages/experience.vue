<template>
    <div class="pt-[6.5rem] px-0 mt-0 mx-[2rem] w-full">
        <div class="flex flex-col items-center justify-center">
            <div class="flex flex-row w-full items-center pb-4">
                <h1 class="font-poppins text-[2rem] mr-4">02. Working Experiences </h1>
                <hr class="border-[1.5px] border-black dark:border-white w-[200px]">
            </div>
            <blockquote class="font-poppins text-sm italic">
                "I see now that the circumstances of one’s birth are irrelevant; it is what you do with the gift of life that determines who you are."
                <cite>- Metwo, <span class="not-italic">Pokemon: The Movie.</span></cite>
            </blockquote>
            <img class="w-1/2" src="/images/pla-mining.png" alt="working experiences">
        </div>
        <div class="flex flex-col justify-between gap-8">
            <p class="text-sm font-poppins leading-7 mt-2">
                Over the course of my high school career, I have always been proactive in seeking out internship opportunities. 
                I've been fortunate enough to have the opportunity to work for various tech companies, where <i>I honed my programming abilities and learned to adapt to a professional environment.</i> 
                These internships have provided me with invaluable insights into the tech industry, and allowed me to work alongside experienced professionals.
                Through these experiences, I have grown both personally and professionally, paving the way for a promising future in the field of technology.
                For a more comprehensive overview, take a look at my resume!
            </p>
            <div class="flex flex-row w-full items-center">
                <h2 class="font-poppins text-2xl mr-4">Where I've Worked </h2>
                <hr class="border-[1.5px] border-black dark:border-white w-[200px]">
            </div>
            <Tabs/>
        </div>
        <div class="flex flex-row w-full items-center">
            <h3 class="font-poppins text-2xl mr-4">Skills & Technologies </h3>
            <hr class="border-[1.5px] border-black dark:border-white w-[200px]">
        </div>
        <div class="flex flex-row flex-wrap items-center mt-4 mb-2 w-full h-[200px]">
            <Badge 
                v-for="(skill, index) in skills"
                :title="skill.title"
                :imageUrl="skill.imageUrl"
                :imageName="skill.imageName"
                :description="skill.description"
                :id="index"
            />
        </div>
    </div>
</template>

<script setup>
import skills from "~/assets/content/skills.json";
console.log(skills)
</script>