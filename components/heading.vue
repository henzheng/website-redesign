<template>
    <div class="flex flex-row w-full items-center pb-4">
        <h1 class="font-sentient text-[1.8rem] mr-4 md:text-[2rem] whitespace-nowrap">{{ text }} </h1>
        <hr class="border-[1.5px] border-black dark:border-white w-[200px] hidden md:block">
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    text: String
})
</script>