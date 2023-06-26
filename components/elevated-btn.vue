<template>
    <button :class="`${color} rounded-full text-white py-2 px-4 flex gap-2 items-center justify-center ${extend ? 'w-screen' : 'max-w-fit'}`">
        <slot name="preicon" />
        <slot />
        <slot name="posticon" />
    </button>
</template>

<script setup>
const props = defineProps({
    color: {
        type: String,
        default: "bg-elevatedButton"
    },
    extend: {
        type: Boolean,
        default: false
    }
})
</script>