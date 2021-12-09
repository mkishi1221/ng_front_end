<template>
  <t-section title="create name templates">
    <template v-slot:cards>
      <t-card>
        <template v-slot:title>
          drag the components to the form below to create a name template
        </template>
      </t-card>
      <t-card>
        <div class="flex">
          <t-chip
            v-for="(algorithm, i) in algorithms"
            :key="i"
            :color="colors.backgroundChip"
            class="mr-2"
          >
            <div class="flex items-center">
              <t-chip :label="algorithm.keyword_type_1" color="#ffffffaa" />
              <span class="mx-4 text-white select-none">{{ algorithm.joint }}</span>
              <t-chip :label="algorithm.keyword_type_2" color="#ffffffaa" />
            </div>
          </t-chip>
        </div>
      </t-card>
    </template>
  </t-section>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { PlusIcon } from 'vue-feather-icons';
import Theme from '~/helper/Theme';
import AlgorithmService from '~/services/algorithmService';

@Component({
  name: 'AlgorithmSection',
  components: {
    PlusIcon,
  },
})
export default class AlgorithmSection extends Vue {
  // Props
  // Data
  algorithms: Algorithm[] = [];
  // Hook Callbacks
  async fetch() {
    this.algorithms = await AlgorithmService.getAlgorithms();
  }
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