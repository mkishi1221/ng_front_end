<template>
    <div class="flex gap-2">
        <elevated-btn extend @click="nextStep" :class="`${showSkip ? 'hidden md:block' : ''} md:w-16`">
            Next
        </elevated-btn>
        <div :class="`${showSkip ? '' : 'hidden md:block'} flex justify-center w-screen md:w-16`">
            <text-btn @click="nextStep">
                Skip
            </text-btn>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    nextStep: Function,
    showSkip: Boolean
})
</script>