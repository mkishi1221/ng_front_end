<template>
    <div class="relative">
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" :placeholder="placeholder" />
        <label for="floating_outlined" class="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
            <slot name="label"/>
        </label>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    modelValue: String,
    placeholder: String
});

const emit = defineEmits(["update:modelValue"]);
</script>