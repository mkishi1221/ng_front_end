<template>
  <div class="relative inline-block">
    <div
      @click="context ? () => {} : toggleMenu()"
      @contextmenu="context ? rightclick($event) : () => {}"
      @mouseleave="triggerResetTimer"
    >
      <slot name="activator" />
    </div>
    <div
      v-if="menuOpen"
      @mouseenter="abortResetTimer"
      @mouseleave="menuOpen = false"
      @click="menuOpen = false"
      class="
        absolute
        bg-white
        border border-gray-300
        rounded-xl
        shadow-lg
        py-2
        px-4
        right-0
        w-32
        z-20
      "
    >
      <slot name="default" />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'TMenu',
  components: {},
})
export default class TMenu extends Vue {
  // Props
  @Prop({ type: Boolean })
  context!: boolean;
  // Data
  menuOpen = false;
  resetTimer: NodeJS.Timeout | null = null;
  // Hook Callbacks
  // Refs
  // Getters
  // Setters
  // Watchers
  // Logic
  rightclick(event: Event) {
    event.preventDefault();
    this.menuOpen = !this.menuOpen;
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  triggerResetTimer() {
    this.resetTimer = setTimeout(() => (this.menuOpen = false), 250);
  }
  abortResetTimer() {
    if (!!this.resetTimer) clearTimeout(this.resetTimer);
  }
}
</script>

<style scoped>
</style>