<template>
    <div id="reveal" class="font-poppins inline-block">
        <div class="char inline-block" v-for="(char, index) in characters" :key="index">
            {{ char === ' ' ? '&nbsp;' : char }}
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
onMounted(() => {
    gsap.to('.char', {
        y: 0, //text will be translated down via css, gsap will revert it to its inital positon
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1
    })
})
const props = defineProps({
    text: String,
})
const characters = props.text.split('')
</script>

<style scoped>
#reveal {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
.char {
    transform: translateY(115px);
    transition: transform .5s;
}
</style>