<template>
    <div class="pt-[6.5rem] px-0 mt-0 mx-[2rem]">
        <div class="flex flex-col items-center justify-center">
            <Heading text="03. Featured Projects"/>
            <Quote 
                class="fade"
                quote="We do have a lot in common. The same earth, the same air, the same sky. Maybe if we started looking at what's the same, instead of looking at what's different, well, who knows?"
                author="Meowth"
                source="Pokemon Anime"
            />
        </div>
        <div class="flex flex-col items-center gap-[3.5rem] mb-5">
            <Project v-for="(project, index) in data" 
                class="project mt-5 swap flex"
                :url="project.url" 
                :image-path="project.imagePath" 
                :project-role="project.projectRole" 
                :description="project.description" 
                :technologies="project.technologies" 
                :project-name="project.projectName"
                :key="index"
            />
        </div>
        <h3 class="font-sentient text-base text-center pb-0 mb-[-2rem] mt-14 md:my-6 md:mr-[2rem]">
            Want to see more of my work? View my 
            <a target="_blank" class="text-[#00a6ed] inline-block transition ease-in-out hover:translate-y-[-2.5px]" 
               href="https://github.com/nullZheng">
               Github profile!
            </a>
        </h3>
    </div>
</template>

<script setup>
import data from "~/assets/content/projects.json";
import { gsap } from "gsap";
console.log(data);

onMounted(() => {
    gsap.utils.toArray(".project").forEach(element => {
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

<style scoped>
.swap:nth-of-type(even) {
    flex-direction: row-reverse;
}

@media (max-width: 640px) {
  .swap:nth-of-type(even) {
    flex-direction: column;
  }
}
</style>