<template>
  <div class="relative inline-block">
    <t-menu context :menu-entries="menuEntries">
      <template v-slot:activator>
        <div
          class="rounded-md px-6 py-2 max-h-full max-w-max"
          :class="menuEntries ? 'hover:opacity-75' : ''"
          :style="chipStyle"
        >
          <span v-if="label" :style="textColor" class="select-none">{{
            label
          }}</span>
          <slot v-else name="default" />
        </div>
      </template>
    </t-menu>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Lumifier from '~/helper/Lumifier';
import MenuEntry from '~/classes/MenuEntry';

@Component({
  name: 'TChip',
  components: {},
})
export default class TChip extends Vue {
  // Props
  @Prop({ type: String })
  label!: string;

  @Prop({ type: String })
  color!: string;

  @Prop({ type: Boolean })
  border!: boolean;

  @Prop()
  menuEntries!: MenuEntry[];

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