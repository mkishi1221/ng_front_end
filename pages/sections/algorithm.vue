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
              <span class="mx-4 text-white select-none">{{
                algorithm.joint
              }}</span>
              <t-chip :label="algorithm.keyword_type_2" color="#ffffffaa" />
            </div>
          </t-chip>
        </div>
      </t-card>
    </template>
  </t-section>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator';
import { PlusIcon } from 'vue-feather-icons';
import Algorithm from '~/classes/Algorithm';
import Theme from '~/helper/Theme';
import AlgorithmService from '~/services/algorithmService';
import WebsocketService from '~/services/websocketService';

@Component({
  name: 'AlgorithmSection',
  components: {
    PlusIcon,
  },
})
export default class AlgorithmSection extends Vue {
  // Props
  // Data
  // Hook Callbacks
  // Refs
  // Getters
  get algorithms(): Algorithm[] {
    return this.$store.state.algorithms.algorithms ?? [];
  }
  get projectName() {
    return this.$store.state.projectConf.projectName ?? '';
  }
  get colors() {
    return Theme.colors;
  }
  get wsConnected() {
    return !!this.$store.state.websocketConf.identifier;
  }
  // Setters
  // Watchers
  @Watch('wsConnected')
  async OnProjectChange(change: boolean) {
    if (change) {
      this.$store.commit(
        'algorithms/setAlgorithms',
        await AlgorithmService.getAlgorithms()
      );
    }
  }
  // Logic
}
</script>

<style scoped>
</style>