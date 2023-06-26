<template>
    <div class="flex h-screen items-end md:items-center justify-center">
        <div class="bg-white w-screen md:w-min h-4/5 md:h-min rounded-3xl p-8 flex flex-col justify-center">
            <div class="h-24" />
            <div class="flex flex-col gap-4">
                <div class="text-gray-500">01/07</div>
                <h1 class="text-xl">Tell us what you do?</h1>
                <div class="text-gray-500">You can select a few</div>
                <div class="flex flex-wrap md:flex-nowrap gap-2">
                    <chip active-icon @click="addChip('service')">
                        service
                    </chip>
                    <chip active-icon @click="addChip('manufacturing')">
                        manufacturing
                    </chip>
                    <chip active-icon @click="addChip('shop')">
                        shop
                    </chip>
                    <chip active-icon @click="addChip('entertainment')">
                        entertainment
                    </chip>
                    <chip active-icon @click="addChip('consulting')">
                        consulting
                    </chip>
                    <chip active-icon @click="addChip('startup')">
                        startup
                    </chip>
                </div>
            </div>
            <div class="h-24" />
            <div class="flex gap-2">
                <elevated-btn extend :class="`${showSkip ? 'hidden' : ''}`">
                    Next
                </elevated-btn>
                <div :class="`${showSkip ? '' : 'hidden md:block'} flex justify-center w-screen`">
                    <text-btn>
                        Skip
                    </text-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const showSkip = ref(true);
const chips = ref([] as string[]);

watch(chips, (newVal) => {
    showSkip.value = newVal.length == 0;
})

function addChip(value: string) {
    if (chips.value.includes(value)) {
        chips.value = chips.value.filter(v => v != value);
    } else {
        chips.value = chips.value.concat(value);
    }
}

</script>