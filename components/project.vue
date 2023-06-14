<template>
    <div class="flex flex-row gap-4">
        <div class="flex items-center justify-center aspect-video w-1/2">
            <a :href="url">
                <img class="rounded-md" :src="imagePath" :alt="projectName">    
            </a>
        </div>
        <div class="flex flex-col w-1/2">
            <h3 class="font-poppins text-lg">{{ projectName }}</h3>
            <p class="font-poppins">{{ projectRole }}</p>
            <div class="bg-slate-800 opacity-80 rounded-sm text-white p-3 my-4">
                <p class="text-white font-poppins text-sm">{{ description }}</p>
            </div>
            <ul class="flex flex-row gap-4">
                <li class="font-poppins" v-for="(tech, index) in technologies" :id="index.toString()">{{ tech }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    url: String,
    imagePath: String,
    projectName: String,
    projectRole: String,
    description: String,
    technologies: Array
})
</script>
