<template>
    <blockquote class="font-poppins text-sm italic">
        "{{ quote }}"
        <cite>- {{ author }}, <span class="not-italic">{{ source }}</span></cite>
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