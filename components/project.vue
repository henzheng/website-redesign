<template>
    <div class="flex flex-col w-[90vw] items-center md:items-start md:w-auto md:flex-row gap-4">
        <div class="flex items-center justify-center aspect-video w-[80%] lg:w-1/2 transition ease-in-out hover:opacity-75">
            <a :href="url">
                <img class="rounded-md" :src="imagePath" :alt="projectName" />
            </a>
        </div>
        <div class="flex flex-col w-[80%] md:w-1/2">
            <h2 class="font-poppins text-lg">{{ projectName }}</h2>
            <p class="font-poppins">{{ projectRole }}</p>
            <div class="bg-slate-800 opacity-80 rounded-sm text-white p-3 my-4">
                <p class="text-white font-poppins text-sm">{{ description }}</p>
            </div>
            <ul class="flex flex-row gap-4">
                <li class="font-poppins text-sm text-black px-2 py-1 rounded-md" :class="`bg-${tech.technologyColor}-300`"
                    v-for="(tech, index) in technologies" :id="index.toString()">
                    {{ tech.technologyName }}
                </li>
            </ul>
            <div class="flex flex-row gap-3 text-xl mt-4">
                <Icon class="cursor-pointer" name="ion:logo-github" />
                <Icon class="cursor-pointer" name="iconoir:open-new-window" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Technology {
    technologyName: string,
    technologyColor: string
}

interface Props {
    url: string,
    imagePath: string,
    projectName: string,
    projectRole: string,
    description: string,
    technologies: Technology[]
}

const props = defineProps<Props>()

</script>
