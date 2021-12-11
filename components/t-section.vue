<template>
  <div class="container mx-auto px-14 xl:px-0 pt-2">
    <div class="flex justify-between items-center">
      <span class="text-2xl text-black dark:text-white">{{ title }}</span>
      <div class="relative inline-block">
        <t-menu>
          <template v-slot:activator>
            <t-icon
              icon="mdi-dots-horizontal"
              class="cursor-pointer text-black dark:text-white"
              size="12"
            />
          </template>
          <slot name="menu-entries" />
        </t-menu>
      </div>
    </div>
    <slot name="cards" />
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'TSection',
  components: {},
})
export default class TSection extends Vue {
  // Props
  @Prop({ type: String })
  title!: string;

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