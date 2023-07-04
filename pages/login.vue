<template>
    <div class="h-screen-app-bar flex flex-col items-center justify-center gap-4">
        <p>Sign-In Options:</p>
        <elevated-btn @click="signIn('google', { callbackUrl: '/'})">
            Google
            <Icon name="mdi:google" size="24" />
        </elevated-btn>
        <elevated-btn @click="signIn('github', { callbackUrl: '/'})">
            Github
            <Icon name="mdi:github" size="24" />
        </elevated-btn>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/',
    }
});
const { signIn } = useAuth();
</script>