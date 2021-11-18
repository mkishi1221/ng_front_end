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
          <template v-slot:title>
              available names
          </template>
      </t-card>
      <t-card>
          <template v-slot:title>
              not available names
          </template>
      </t-card>
    </template>
  </t-section>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';

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

  // Setters

  // Watchers

  // Logic
}
</script>

<style scoped>
</style>