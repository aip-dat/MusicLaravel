<script setup>
const props = defineProps({
    color: { default: "text-gray-700" },
});
</script>

<template>
    <h1 class="text-3xl bold" :class="color">Music</h1>
</template>
