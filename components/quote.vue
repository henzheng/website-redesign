<template>
    <blockquote class="text-sm font-nunito leading-7 text-gray-700 dark:text-gray-300 max-w-4xl">
        "{{ quote }}"
        <cite class="block mt-2 text-sm font-nunito leading-7 text-gray-700 dark:text-gray-300">- {{ author }}, <span class="not-italic">{{ source }}</span></cite>
    </blockquote>
</template>

<script setup lang="ts">
interface Quote {
    quote: string,
    author: string,
    source: string
}

const props = defineProps<Quote>()
</script>