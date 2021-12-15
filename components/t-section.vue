<template>
  <div class="container mx-auto px-14 xl:px-6 pt-2">
    <div class="flex justify-between items-center">
      <span class="text-xl text-black text-opacity-50 dark:text-white font-bold align-bottom">{{ title }}</span>
      <div class="relative inline-block">
        <t-menu>
          <template v-slot:activator>
            <t-icon
              icon="mdi-dots-horizontal"
              class="cursor-pointer dark:text-white text-2xl "
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