<template>
  <span
    class="iconify"
    :class="`${animations} ${sizes} ${color}`"
    :data-icon="icon"
  />
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'TIcon',
  components: {},
})
export default class TIcon extends Vue {
  // Props
  @Prop({ type: String })
  icon!: string;

  @Prop({ type: String, default: "10" })
  size!: string;

  @Prop({ type: Boolean, default: false })
  spinning!: boolean;

  @Prop({ type: Boolean, default: false })
  pinging!: boolean;

  @Prop({ type: Boolean, default: false })
  pulsing!: boolean;

  @Prop({ type: Boolean, default: false })
  bouncing!: boolean;

  @Prop({ type: String, default: "text-darkGray" })
  color!: string;
  // Data
  // Hook Callbacks
  // Refs
  // Getters
  get animations() {
    return `${this.spinning ? 'animate-spin' : ''} ${
      this.pinging ? 'animate-ping' : ''
    } ${this.pulsing ? 'animate-pulse' : ''} ${
      this.bouncing ? 'animate-bounce' : ''
    }`;
  }

  get sizes() {
    return `w-${this.size} h-${this.size}`;
  }
  // Setters
  // Watchers
  // Logic
}
</script>

<style scoped>
</style>