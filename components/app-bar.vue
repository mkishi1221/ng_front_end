<template>
    <div class="w-full h-16">
        <div class="flex justify-between items-center h-16 px-4">
            <nuxt-link to="/">
                <img src="/forehuman_logo.svg" />
            </nuxt-link>
            <img v-if="data" @click.stop="showMenu = !showMenu" :src="userImage" class="w-12 h-12 rounded-full cursor-pointer" />
        </div>
    </div>
    <div v-if="showMenu" class="absolute right-2 top-16 p-4 flex flex-col gap-2 bg-white border border-black rounded-lg w-40">
        <nuxt-link to="/profile/categories" class="flex items-center gap-2 cursor-pointer">
            Profile <Icon name="mdi:account" />
        </nuxt-link>
        <div @click="() => signOut()" class="flex items-center gap-2 cursor-pointer">
            Sign out <Icon name="mdi:logout" />
        </div>
    </div>
</template>

<script setup lang="ts">

const { data, signOut  } = useAuth();

const showMenu = ref(false);

const userImage = computed(() => data.value?.user?.image ?? "");

onMounted(() => {
    document.addEventListener("click", () => {
        if (showMenu.value) {
            showMenu.value = false;
        }
    });
})

</script>