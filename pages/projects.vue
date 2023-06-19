<template>
    <div class="pt-[6.5rem] px-0 mt-0 mx-[2rem] w-full">
        <div class="flex flex-col items-center justify-center">
            <div class="flex flex-row w-full items-center pb-4">
                <h1 class="font-poppins text-[2rem] mr-4">03. Featured Projects </h1>
                <hr class="border-[1.5px] border-black w-[200px]">
            </div>
            <blockquote class="font-poppins text-sm italic">
                “We do have a lot in common. 
                The same earth, the same air, the same sky. 
                Maybe if we started looking at what’s the same, instead of looking at what’s different, well, who knows?”
                <cite>- Meowth, <span class="not-italic">Pokemon Anime</span></cite>
            </blockquote>
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
            Want to see more of my work? View my <a class="text-[#00a6ed] inline-block transition ease-in-out hover:translate-y-[-2.5px]" href="https://github.com/nullZheng">Github profile!</a>
        </h3>
    </div>
</template>

<script setup lang="ts">
import data from "~/assets/content/projects.json";
console.log(data);

</script>

<style scoped>
.swap:nth-of-type(even) {
    flex-direction: row-reverse;
}
</style>