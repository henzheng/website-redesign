<template>
    <div class="flex flex-col items-center h-full w-1/2 md:w-1/4 gap-3">
        <h3 class="font-poppins text-lg">{{ title }}</h3>
        <nuxt-img format="webp" class="aspect-square w-[90px] flip-on-hover" :src="imageUrl" :alt="imageName" />
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
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
}

.flip-on-hover:hover {
    animation: flip-with-rotate 3s infinite;
}

@keyframes flip-with-rotate {
    0% {
        transform: perspective(400px) rotateY(0);
    }

    50% {
        transform: perspective(400px) rotateY(180deg);
    }

    100% {
        transform: perspective(400px) rotateY(0);
    }
}

</style>