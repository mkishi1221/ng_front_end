<template>
  <div class="flex items-center">
    <input
      v-model="valueSynced"
      :name="`checkbox-${randomId}`"
      type="checkbox"
      class="text-black text-opacity-75 rounded"
    />
    <label
      class="ml-2 text-black text-opacity-75 dark:text-white cursor-pointer select-none"
      :for="`checkbox-${randomId}`"
      @click="valueSynced = !valueSynced"
      >{{ label }}</label
    >
  </div>
</template>

<script lang='ts'>
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator';
import randomstring from 'randomstring';

@Component({
  name: 'TCheckbox',
  components: {},
})
export default class TCheckbox extends Vue {
  // Props
  @PropSync('value')
  valueSynced!: boolean;

  @Prop({ type: String })
  label!: string;

  // Data
  randomId = randomstring.generate();

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