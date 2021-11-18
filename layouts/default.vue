<template>
  <div class="bg-canvas dark:bg-canvasDark">
    <app-bar />
    <nuxt class="pt-20" />
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'DefaultLayout',
  components: {},
})
export default class DefaultLayout extends Vue {
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

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 8px;
}
</style>