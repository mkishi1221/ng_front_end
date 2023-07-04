<template>
    <div class="flex h-screen-app-bar items-end md:items-center justify-center">
        <div class="bg-white w-screen md:w-[700px] lg:w-[1000px] h-4/5 md:h-min rounded-3xl p-8 flex flex-col justify-center">
            <div class="h-24" />
            <div class="flex flex-col gap-4">
                <div class="text-gray-500">01/06</div>
                <h1 class="text-xl">Tell us what you do?</h1>
                <div class="text-gray-500">You can select a few</div>
                <div class="flex flex-wrap gap-2 max-h-72 overflow-y-scroll md:overflow-auto">
                    <chip v-for="(ct, i) in chipTexts" :key="i" active-icon @click="addChip(ct)">
                        {{ ct }}
                    </chip>
                    <text-field v-if="showAddMoreChip" v-model="addMoreChipText" placeholder="write whatever your want..."/>
                    <text-btn @click="toggleAddMore">
                        <template #preicon>
                            <Icon name="mdi:plus" size="24" />
                        </template>
                        {{ showAddMoreChip ? "add" : "add more" }}
                    </text-btn>
                </div>
            </div>
            <div class="h-24" />
            <profile-buttons :next-step="nextStep" :show-skip="showSkip" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Profile from "~/models/profile";
import ProfileButtons from "./components/profileButtons.vue";
import { useProfileStore } from "~/stores/profile";

const profileStore = useProfileStore();

const showSkip = ref(true);
const chips = ref([] as string[]);
const showAddMoreChip = ref(false);
const addMoreChipText = ref("");

const chipTexts = ref([
    "service", "manufacturing", "shop", "entertainment", "consulting", "startup"
]);

useAsyncData(async () => {
    // TODO: backend call to fetch profile
    profileStore.init(new Profile().toJSON());
})

watch(chips, (newVal) => {
    showSkip.value = newVal.length == 0;
})

function addChip(value: string) {
    if (chips.value.includes(value)) {
        chips.value = chips.value.filter(v => v != value);
    } else {
        chips.value = chips.value.concat(value);
    }
    profileStore.mutateCategory(value);
}

function toggleAddMore() {
    if (!!addMoreChipText.value) {
        chipTexts.value.push(addMoreChipText.value);
        addMoreChipText.value = "";
    }
    showAddMoreChip.value = !showAddMoreChip.value;
}

function nextStep() {
    useRouter().push("/profile/describers");
}
</script>