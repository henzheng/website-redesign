<template>
    <div class="relative top-[5rem] left-[15rem] w-[400px] flex flex-row p-5 bg-white rounded shadow-2xl isometric">
        <div class="flex flex-col font-poppins w-3/4">
            <h3 class="text-2xl">Henry Zheng</h3>
            <p class="text-lg">Fullstack Developer</p>
            <div class="flex flex-col text-base mt-2">
                <p class="text-sm">Flushed Emoji Advocate</p>
                <p class="text-sm">Tech Enthusiast</p>
                <p class="text-sm">Pokemon Trainer</p>
            </div>
        </div>
        <img class="aspect-square w-1/3 h-1/3" src="/images/profile.png" alt="profile">
    </div>
</template>

<style scoped>
.isometric {
    transition: all ease-in-out 300ms;
    transform: rotateX(45deg) rotateZ(-45deg);
}
.isometric:hover {
    transform: rotateX(0deg) rotateZ(0deg);
}
</style>