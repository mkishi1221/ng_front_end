<template>
  <t-section title="explore names and domains">
    <template v-slot:cards>
      <t-card>
        <template v-slot:title> select TLDs for your domain </template>
        <t-input class="w-full" placeholder="search or add names..." />
        <div class="flex items-center">
          <t-checkbox
            :value.sync="showExtensions"
            label="show extensions (e.g. .com) in results"
          />
          <t-checkbox
            class="ml-4"
            :value.sync="showInLowerCase"
            label="show results in lowercase"
          />
        </div>
      </t-card>
      <t-card>
        <template v-slot:title> available names </template>
        <div class="flex flex-wrap">
          <t-chip
            v-for="(name, i) in names"
            :key="i"
            :color="getChipColor()"
            class="m-2"
            :label="name.domain"
          />
        </div>
      </t-card>
      <t-card>
        <template v-slot:title> not available names </template>
      </t-card>
    </template>
  </t-section>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Theme from '~/helper/Theme';

@Component({
  name: 'NameSection',
  components: {},
})
export default class NameSection extends Vue {
  // Props

  // Data
  showExtensions = false;
  showInLowerCase = false;

  // Hook Callbacks

  // Refs

  // Getters
  get names() {
    return this.$store.state.names.names ?? [];
  }
  get colors() {
    return Theme.colors;
  }

  // Setters

  // Watchers

  // Logic
  getChipColor() {
    return this.colors.backgroundChip;
  }
}
</script>

<style scoped>
</style>