<template></template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'Login',
  components: {},
})
export default class Login extends Vue {
  // Props

  // Data

  // Hook Callbacks
  mounted() {
    if (!this.$auth.loggedIn) {
      this.$auth.loginWith('auth0');
    }
  }

  // Refs

  // Getters

  // Setters

  // Watchers

  // Logic
}
</script>

<style scoped>
</style>