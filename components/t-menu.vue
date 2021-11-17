<template>
  <div>
    <div
      @click="context ? () => {} : toggleMenu()"
      @contextmenu="context ? rightclick($event) : () => {}"
    >
      <slot name="activator" />
    </div>
    <div
      v-if="menuOpen"
      @mouseleave="menuOpen = false"
      class="
        absolute
        bg-white
        border border-gray-300
        rounded-xl
        shadow-lg
        py-2
        px-4
        right-0
        w-32
        z-20
      "
    >
      <template v-for="(entry, i) in menuEntries">
        <div
          v-if="entry.type === entryTypes.ITEM"
          :key="i"
          class="
            cursor-pointer
            hover:bg-gray-100
            rounded
            p-2
            w-full
            select-none
          "
          @click="executeCallback(entry.callback)"
        >
          {{ entry.text }}
        </div>
        <hr
          v-else-if="entry.type === entryTypes.DIVIDER"
          :key="i"
          class="border border-gray-300 my-2"
        />
      </template>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import MenuEntry, { MenuEntryTypes } from '~/classes/MenuEntry';

@Component({
  name: 'TMenu',
  components: {},
})
export default class TMenu extends Vue {
  // Props
  @Prop()
  menuEntries!: MenuEntry[];

  @Prop({ type: Boolean })
  context!: boolean;
  // Data
  menuOpen = false;
  // Hook Callbacks
  // Refs
  // Getters
  get entryTypes() {
      return MenuEntryTypes;
  }
  // Setters
  // Watchers
  // Logic
  executeCallback(callback: Function) {
    if (callback) callback();
  }
  rightclick(event: Event) {
    event.preventDefault();
    this.menuOpen = !this.menuOpen;
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
</script>

<style scoped>
</style>