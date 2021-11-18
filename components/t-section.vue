<template>
  <div class="container mx-auto px-14 xl:px-0 pt-2">
    <div class="flex justify-between items-center">
      <span class="text-2xl text-black dark:text-white">{{ title }}</span>
      <div class="relative inline-block">
        <t-menu :menu-entries="menuEntries">
          <template v-slot:activator>
            <more-horizontal-icon class="cursor-pointer text-black dark:text-white" size="35" />
          </template>
        </t-menu>
      </div>
    </div>
    <slot name="cards" />
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { MoreHorizontalIcon } from 'vue-feather-icons';
import MenuEntry from '~/classes/MenuEntry';

@Component({
  name: 'TSection',
  components: {
    MoreHorizontalIcon,
  },
})
export default class TSection extends Vue {
  // Props
  @Prop({ type: String })
  title!: string;

  @Prop()
  menuEntries!: MenuEntry[];

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