<template>
  <input
    :value="value"
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
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'ClearInput',
  components: {},
})
export default class ClearInput extends Vue {
  // Props
  @Prop()
  value!: string | number;

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