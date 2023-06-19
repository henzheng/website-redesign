<template>
    <div class="flex flex-row w-full items-center pb-4">
        <h1 class="font-poppins text-[2rem] mr-4">{{ text }} </h1>
        <hr class="border-[1.5px] border-black dark:border-white w-[200px]">
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    text: String
})
</script>