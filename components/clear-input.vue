<template>
  <input
    v-model="syncedValue"
    class="
      bg-transparent
      focus:outline-none
      text-white
      placeholder-white
      text-xs
    "
    :placeholder="placeholder"
    @change="change"
  />
</template>

<script lang='ts'>
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'ClearInput',
  components: {},
})
export default class ClearInput extends Vue {
  // Props
  @PropSync("value")
  syncedValue!: string | number;

  @Prop({ type: String })
  placeholder!: string;

  @Prop({ type: Function })
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