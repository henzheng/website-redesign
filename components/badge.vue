<template>
    <div class="flex flex-col items-center h-full w-1/4 gap-3">
        <h3 class="font-poppins text-lg">{{ title }}</h3>
        <img class="aspect-square w-[90px] flip-on-hover" :src="imageUrl" :alt="imageName">
        <p class="font-poppins text-sm text-center">{{ description }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    imageUrl: String,
    imageName: String,
    description: String,
})
</script>

<style scoped>
.flip-on-hover {
    transition: all ease-in-out 300ms;
}
.flip-on-hover:hover {
    animation: flip-with-rotate 1s;
}

@keyframes flip-with-rotate {
    0% {
        transform: perspective(400px) rotateY(0);
    }

    100% {
        transform: perspective(400px) rotateY(180deg);
    }
}
</style>