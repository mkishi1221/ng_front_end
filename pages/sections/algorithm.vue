<template>
  <t-section title="create name templates">
    <template v-slot:cards>
      <t-card>
          <template v-slot:title>
              drag the components to the form below to create a name template
          </template>
      </t-card>
      <t-card>
        <t-chip :color="colors.backgroundChip">
          <div class="flex items-center">
            <t-chip label="adjective" color="#ffffffaa" />
            <plus-icon size="24" class="mx-4 text-white" />
            <t-chip label="noun" color="#ffffffaa" />
          </div>
        </t-chip>
      </t-card>
    </template>
  </t-section>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { PlusIcon } from "vue-feather-icons";
import Theme from "~/helper/Theme";

@Component({
  name: 'AlgorithmSection',
  components: {
    PlusIcon
  },
})
export default class AlgorithmSection extends Vue {
  // Props
  // Data
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