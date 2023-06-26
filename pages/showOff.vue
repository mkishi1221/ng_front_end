<template>
    <div class="flex flex-col gap-2">
        <chip active-icon>
            Test
        </chip>
        <elevated-btn @click="typeHi">
            Next Step
        </elevated-btn>
        <text-btn>
            <template #preicon>
                <Icon name="mdi:plus" size="24" />
            </template>
            Add more
        </text-btn>
        <text-field v-model="textval">
            <template #label>
                First Name
            </template>
        </text-field>
        <text-area placeholder="Test placeholder"></text-area>
    </div>
</template>

<script setup>

const textval = ref("");

watch(textval, () => { console.log(textval.value); });

function typeHi() {
    console.log("HI!")
}
</script>