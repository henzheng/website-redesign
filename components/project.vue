<template>
    <div class="flex flex-row gap-4">
        <div class="flex items-center justify-center aspect-video w-1/2 transition ease-in-out hover:scale-105">
            <a :href="url">
                <nuxt-img format="webp" class="rounded-md" :src="imagePath" :alt="projectName" />
            </a>
        </div>
        <div class="flex flex-col w-1/2">
            <h2 class="font-poppins text-lg">{{ projectName }}</h2>
            <p class="font-poppins">{{ projectRole }}</p>
            <div class="bg-slate-800 opacity-80 rounded-sm text-white p-3 my-4">
                <p class="text-white font-poppins text-sm">{{ description }}</p>
            </div>
            <ul class="flex flex-row gap-4">
                <li class="font-poppins px-2 rounded-md text-black"
                    :class="`bg-${tech.technologyColor}-300`"
                    v-for="(tech, index) in technologies" :id="index.toString()">
                    {{ tech.technologyName }}
                </li>
            </ul>
            <div class="flex flex-row gap-3 text-2xl mt-2">
                <Icon class="cursor-pointer" name="ion:logo-github"/>
                <Icon class="cursor-pointer" name="iconoir:open-new-window"/>
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
