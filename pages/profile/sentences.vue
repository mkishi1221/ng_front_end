<template>
    <div class="flex h-screen-app-bar items-end md:items-center justify-center">
        <div class="bg-white w-screen md:w-[700px] lg:w-[1000px] h-4/5 md:h-min rounded-3xl p-8 flex flex-col justify-center">
            <div class="flex">
                <div class="cursor-pointer" @click="previousStep">
                    Back
                </div>
            </div>
            <div class="h-24" />
            <div class="flex flex-col gap-4">
                <div class="text-gray-500">05/06</div>
                <h1 class="text-xl">Add sentences:</h1>
                <div class="text-gray-500">Generate keywords from any text. Paste anything here that you think could be relevant:</div>
                <text-area v-model="sentences" class="mt-4"></text-area>
            </div>
            <div class="h-24" />
            <profile-buttons :next-step="nextStep" :show-skip="showSkip" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ProfileButtons from "./components/profileButtons.vue";

const showSkip = ref(true);
const sentences = ref("");

watch(sentences, (val) => {
    showSkip.value = !val;
});

function previousStep() {
    useRouter().back();
}

function nextStep() {
    useRouter().push("/profile/describers");
}
</script>