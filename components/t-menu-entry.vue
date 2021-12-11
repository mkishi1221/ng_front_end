<template>
  <div
    @click="$emit('click')"
    class="cursor-pointer hover:bg-gray-100 rounded p-2 w-full select-none"
  >
    <slot name="default" />
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'TMenuEntry',
  components: {},
})
export default class TMenuEntry extends Vue {
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