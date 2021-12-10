<template>
  <div
    v-if="syncedOpen"
    class="absolute top-0 h-screen w-screen bg-opacity-60 bg-gray-800 flex flex-col justify-center p-16"
    style="align-items: center;"
  >
    <div class="shadow rounded-lg max-w-md bg-white p-4">
      <!-- title -->
      <div class="text-2xl font-normal flex" style="align-items: center">
        <slot name="title" />
      </div>
      <!-- text -->
      <div class="pt-4 px-1 mb-3">
        <slot name="content" />
      </div>
      <!-- actions -->
      <div class="flex">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, PropSync, Vue } from "nuxt-property-decorator";

@Component({
  name: "TDialog",
  components: {},
})
export default class TDialog extends Vue {
  // Props
  @PropSync("open", { type: Boolean })
  syncedOpen!: boolean;

  @Prop({ type: Boolean, default: false })
  persistent!: boolean;

  // Data
  // Hook Callbacks
  // Refs
  // Getters
  // Setters
  // Watchers
  // Logic
  close() {
    this.syncedOpen = false;
  }
}
</script>

<style scoped>
</style>