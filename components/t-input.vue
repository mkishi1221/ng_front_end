<template>
  <input
    v-model="syncedValue"
    class="
      bg-white
      rounded-lg
      p-2
      focus:outline-none focus:ring-2 focus:ring-gray-200
      placeholder-gray-500
    "
    :placeholder="placeholder"
    @change="change"
  />
</template>

<script lang='ts'>
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'TInput',
  components: {},
})
export default class TInput extends Vue {
  // Props
  @PropSync("value")
  syncedValue!: string | number

  @Prop({ type: String })
  placeholder!: string;

  @Prop({ type: Function, default: () => {} })
  change!: Function;

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