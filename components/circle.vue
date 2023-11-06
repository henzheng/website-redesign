<template>
    <svg width="160" height="160" viewBox="0 0 160 160" shape-rendering="auto">
        <circle
            class="text-stone-300 dark:text-[#3A3A3A]"
            stroke-width="4.5"
            stroke="currentColor"
            fill="transparent"
            r="55"
            cx="80"
            cy="80"
        />
        <circle
            ref="progressBar"
            class="text-[#4A90E2] dark:text-blue-600"
            stroke-width="5"
            stroke-linecap="round"
            stroke="currentColor"
            fill="transparent"
            :stroke-dasharray="55 * 2 * Math.PI"
            :stroke-dashoffset="55 * 2 * Math.PI - props.percentage / 100 * 55 * 2 * Math.PI"
            r="55"
            cx="80"
            cy="80"
            transform="rotate(-270, 80, 80)"
        />
        <text x="80" y="65" dominant-baseline="middle" text-anchor="middle" class="font-poppins text-2xl text-[#4A90E2] dark:text-white" fill="currentColor">
            <tspan>{{ props.title }}</tspan>
            <tspan class="font-poppins text-xs" x="80" dy="2em">{{ props.line1 }}</tspan>
            <tspan class="font-poppins text-xs" x="80" dy="1.5em">{{ props.line2 }}</tspan>
        </text>
    </svg>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const progressBar = ref(null)
const props = defineProps({
    title: String,
    line1: String,
    line2: String,
    percentage: Number,
})

const dashArray = computed(() => 55 * 2 * Math.PI);
const dashOffset = computed(dashArray.value);

onMounted(() => {
    gsap.fromTo(
        progressBar.value,
        { strokeDashoffset: dashArray.value },
        {
            strokeDashoffset: dashArray.value - (props.percentage / 100) * dashArray.value,
            duration: 2, // Duration in seconds
            ease: 'power1.out', // Easing function
            // scrollTrigger: {
            //     trigger: progressBar.value, 
            //     start: "top center", 
            //     end: "bottom center", 
            // }
        }
    )
})
</script>