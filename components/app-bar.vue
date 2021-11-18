<template>
  <div
    class="
      h-16
      w-screen
      fixed
      top-0
      flex
      justify-between
      items-center
      bg-white
      dark:bg-cardDark
      z-50
    "
  >
    <span class="text-black dark:text-white text-2xl ml-8"
      >identity -> brand</span
    >
    <div
      class="text-black dark:text-white flex justify-evenly items-center"
      style="width: 60vw"
    >
      <div class="cursor-pointer hover:underline">features</div>
      <div class="cursor-pointer hover:underline">pricing</div>
      <div class="cursor-pointer hover:underline">about us</div>
      <div
        class="rounded max-h-full shadow-lg p-2 cursor-pointer"
        style="background-color: #e06d41"
      >
        try premium
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'AppBar',
  components: {},
})
export default class AppBar extends Vue {
  // Props
  // Data
  // Hook Callbacks
  // Refs
  // Getters
  // Setters
  // Watchers
  // Logic
}
</script>

<style scoped>
</style>