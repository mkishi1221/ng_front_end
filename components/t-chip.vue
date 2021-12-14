<template>
  <div
    class="rounded-md px-3 py-1 max-h-full max-w-max flex items-center"
    :class="hover ? 'hover:opacity-75' : ''"
    :style="chipStyle"
  >
    <span v-if="label" :style="textColor" class="select-none">{{ label }}</span>
    <slot v-else name="default" />
    <div @click="$emit('delete')">
      <t-icon
        v-if="deleteable"
        icon="mdi-close"
        size="5"
        color="text-black text-opacity-75"
        class="ml-3 -mr-3 cursor-pointer"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Lumifier from '~/helper/Lumifier';

@Component({
  name: 'TChip',
  components: {},
})
export default class TChip extends Vue {
  // Props
  @Prop({ type: String })
  label!: string;

  @Prop({ type: String, default: '#ffffff' })
  color!: string;

  @Prop({ type: Boolean })
  border!: boolean;

  @Prop({ type: Boolean, default: false })
  deleteable!: boolean;

  @Prop({ type: Boolean })
  hover!: boolean;

  // Data

  // Hook Callbacks

  // Refs

  // Getters
  get chipStyle() {
    return this.chipColor + this.chipBorder;
  }

  get chipColor() {
    return `background-color: ${this.color};`;
  }

  get chipBorder() {
    if (this.border) {
      return `border: solid; border-width: 2px; border-color: ${Lumifier.lightenDarkenColor(
        this.color,
        -75
      )}`;
    }
    return '';
  }

  get textColor() {
    return Lumifier.textColor(this.color);
  }

  // Setters

  // Watchers

  // Logic
}
</script>

<style scoped>
</style>