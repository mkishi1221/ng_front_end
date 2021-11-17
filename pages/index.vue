<template>
  <div class="w-screen h-screen" style="background-color: #e0e0e0">
    <t-section
      title="add source text"
      card-title="dwkjabdjkawdkjaw"
      :menu-entries="menuEntriesCard"
    >
      <template v-slot:cardContent>
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
      </template>
    </t-section>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Theme from '~/helper/Theme';
import MenuEntry, { MenuEntryTypes } from '~/classes/MenuEntry';

@Component({
  name: 'LandingPage',
  components: {},
})
export default class LandingPage extends Vue {
  // Props
  // Data
  menuEntriesCard: MenuEntry[] = [
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