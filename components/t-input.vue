<template>
  <input
    v-model="value"
    class="
      bg-white
      rounded-lg
      p-2
      focus:outline-none focus:ring-2 focus:ring-gray-200
      placeholder-gray-500
    "
    :placeholder="placeholder"
  />
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'TInput',
  components: {},
})
export default class TInput extends Vue {
  // Props
  @Prop()
  value!: string | number

  @Prop({ type: String })
  placeholder!: string;

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