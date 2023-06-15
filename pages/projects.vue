<template>
    <div class="pt-[6.5rem] px-0 mt-0 mx-[2rem] w-full">
        <div class="flex flex-col items-center justify-center">
            <div class="flex flex-row w-full items-center pb-4">
                <h1 class="font-poppins text-[2rem] mr-4">03. Featured Projects </h1>
                <hr class="border-[1.5px] border-black w-[200px]">
            </div>
            <!-- <img class="w-1/2" src="/images/picnic.png" alt="picnic"> -->
        </div>
        <div class="flex flex-col gap-[5rem] mb-5">
            <Project v-for="project in data" 
                class="mt-5 swap"
                :url="project.url" 
                :image-path="project.imagePath" 
                :project-role="project.projectRole" 
                :description="project.description" 
                :technologies="project.technologies" 
                :project-name="project.projectName"
            />
        </div>
        <h3 class="font-poppins text-base text-center my-6 mr-[2rem]">
            Want to see more of my work? View my <a class="text-[#00a6ed]" href="https://github.com/nullZheng">Github profile!</a>
        </h3>
    </div>
</template>

<script setup lang="ts">
const data = [
    {
        url: "/",
        imagePath: "/images/sinnoh.jpg",
        projectName: "Portfolio Website",
        projectRole: "Sole Developer",
        description: "A simple, clean portfolio website displaying my information and accomplishments.",
        technologies: ["Nuxt.js", "TailwindCSS"]
    },
    {
        url: "https://github.com/nullZheng/TravelerJS",
        imagePath: "/images/genshin.jpg",
        projectName: "Traveler Discord Bot",
        projectRole: "Sole Developer",
        description: "An easy-to-use Genshin Impact wiki right in the comfort of your Discord server!",
        technologies: ["Javascript", "Discord.js"]
    },
    {
        url: "https://github.com/nullZheng/Data-Visualization",
        imagePath: "/images/starters.jpg",
        projectName: "Pokemon Data Visualization",
        projectRole: "Sole Developer",
        description: "Take a look at the data behind the original 151 Pokemon with stunning visuals and a new perspective.",
        technologies: ["Svelte", "D3.js", "Chart.js"]
    },
    {
        url: "https://random-valorant.netlify.app",
        imagePath: "/images/valorant.jpg",
        projectName: "Random Valorant Generator",
        projectRole: "Sole Developer",
        description: "Don't know what to choose? Generate agents or maps to randomize your gameplay.",
        technologies: ["HTML", "CSS", "Javascript"]
    }
]
</script>

<style scoped>
.swap:nth-of-type(even) {
    flex-direction: row-reverse;
}
</style>