<template>
    HI
    {{ data }}
    <elevated-btn @click="signOut">Sign out</elevated-btn>
</template>

<script setup lang="ts">
const { signOut, data } = useAuth();

</script>