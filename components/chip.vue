<template>
    <div :class="`${active ? `${activeColor} text-white` : 'border border-black'} rounded-lg flex gap-2 py-2 px-4 max-w-fit cursor-pointer select-none`" @click="active = !active">
        <template v-if="!activeIcon">
            <slot name="preicon" />
        </template>
        <template v-else-if="active">
            <Icon name="mdi:check" size="24" />
        </template>

        <slot />

        <slot name="posticon" />
    </div>
</template>

<script setup>
const props = defineProps({
    activeColor: {
        type: String,
        default: "bg-chipActive"
    },
    activeIcon: Boolean
});

const emit = defineEmits(["onActive"]);

const active = ref(false);

watch(active, (newVal) => {
    emit("onActive", newVal);
})
</script>