<template>
    <NuxtPage />
</template>

<script setup lang="ts">
definePageMeta({
    key: route => route.fullPath,
    keepalive: {
        exclude: ["modal"]
    }
});
</script>