<template>
  <div class="rounded-md p-2 h-9 max-w-max" :style="chipStyle">
    <span :style="textColor">{{ label }}</span>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Lumifier from '~/helper/Lumifier'

@Component({
  name: 'TChip',
  components: {},
})
export default class TChip extends Vue {
  // Props
  @Prop({ type: String })
  label!: string

  @Prop({ type: String })
  color!: string

  @Prop({ type: Boolean })
  border!: boolean

  // Data

  // Hook Callbacks

  // Refs

  // Getters
  get chipStyle() {
    return this.chipColor + this.chipBorder
  }

  get chipColor() {
    return `background-color: ${this.color};`
  }

  get chipBorder() {
    if (this.border) {
      return `border: solid; border-width: 2px; border-color: ${Lumifier.lightenDarkenColor(
        this.color,
        -75
      )}`
    }
    return ''
  }

  get textColor() {
    return Lumifier.textColor(this.color)
  }

  // Setters

  // Watchers

  // Logic
}
</script>

<style scoped>
</style>