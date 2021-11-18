<template>
  <t-section
    title="manage keywords"
    :menu-entries="menuEntriesOptions"
  >
    <template v-slot:cards>
      <t-card class="mt-2">
        <template v-slot:title> filter keywords </template>
        <t-input placeholder="Search for something" />
        <div class="flex flex-wrap">
          <t-chip
            v-for="(p, i) in 20"
            :key="i"
            class="mt-2 mr-2"
            :color="colors.notAvailable"
            label="cakkeeeee"
            :menu-entries="menuEntriesChips"
          />
        </div>
      </t-card>
    </template>
  </t-section>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Theme from '~/helper/Theme';
import MenuEntry from '~/classes/MenuEntry';

@Component({
  name: 'KeywordSection',
  components: {},
})
export default class KeywordSection extends Vue {
  // Props

  // Data
  menuEntriesOptions: MenuEntry[] = [
    new MenuEntry({
      text: 'test',
      callback: () => console.log('djwbakjdbakjwbdjka'),
    }),
    new MenuEntry({
      text: 'test2',
    }),
    MenuEntry.DIVIDER,
    new MenuEntry({
      text: 'test3',
    }),
  ];
  menuEntriesChips: MenuEntry[] = [
    new MenuEntry({
      text: 'hi!',
    }),
  ];
  // Hook Callbacks
  // Refs
  // Getters
  get colors() {
    return Theme.colors;
  }

  // Setters

  // Watchers

  // Logic
}
</script>

<style scoped>
</style>