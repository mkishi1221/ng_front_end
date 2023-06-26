<template>
    <button :class="`${color} py-2 px-4 max-w-fit flex gap-2 items-center`">
        <slot name="preicon" />
        <slot />
        <slot name="posticon" />
    </button>
</template>

<script setup>
const props = defineProps({
    color: {
        type: String,
        default: "text-black"
    }
})
</script>