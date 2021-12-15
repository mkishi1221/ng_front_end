<template>
  <t-section title="create name templates">
    <template v-slot:cards>
      <t-card>
        <template v-slot:title>
          drag the components to the form below to create a name template
        </template>
        <draggable
          v-model="defaultComponents"
          class="flex flex-wrap gap-3"
          :sort="false"
          :group="{ name: 'components', pull: 'clone', put: false }"
        >
          <t-chip
            v-for="(component, i) in defaultComponents"
            :key="i"
            :label="component"
          />
        </draggable>
        <div class="flex">
          <div
            class="flex w-full bg-canvas rounded-xl"
            style="min-height: 64px"
          >
            <draggable
              class="w-full"
              style="min-height: 32px"
              v-model="buildingComponents"
              group="components"
            >
              <t-chip
                v-for="(component, i) in buildingComponents"
                :key="i"
                :label="component"
                deleteable
                @delete="removeFromBuildingComponents(i)"
              />
            </draggable>
          </div>
          <div
            @click="addAlgorithm"
            class="
              bg-darkBlueNew
              p-4
              rounded-xl
              ml-2
              text-base text-white
              cursor-pointer
              flex flex-col
              justify-center
              text-center
              font-bold
            "
            style="min-height: 64px; min-width: 150px"
          >
            <span>add algorithm</span>
          </div>
        </div>
      </t-card>
      <t-card>
        <div class="flex flex-wrap gap-3">
          <t-chip
            v-for="(algorithm, i) in algorithms"
            :key="i"
            :color="colors.backgroundChip"
          >
            <div class="flex items-center py-1">
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
import Algorithm from '~/classes/Algorithm';
import Theme from '~/helper/Theme';
import draggable from 'vuedraggable';

@Component({
  name: 'AlgorithmSection',
  components: {
    draggable,
  },
})
export default class AlgorithmSection extends Vue {
  // Props
  // Data
  defaultComponents: string[] = [
    'adjective',
    'noun',
    'verb',
    'prefix',
    'suffix',
    'and',
    'to',
  ];
  buildingComponents: string[] = [];
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
      this.$store.dispatch('algorithms/setAlgorithms');
    }
  }
  // Logic
  removeFromBuildingComponents(index: number) {
    const components = [...this.buildingComponents];
    // TODO: investigate
    this.buildingComponents = components
      .slice(0, index)
      .concat(components.slice(index + 1, components.length));
  }
  addAlgorithm() {
    const components = [...this.buildingComponents];
    if (!components.length) return;
    let alg!: Algorithm;
    if (
      components[0] === 'suffix' ||
      components[components.length - 1] === 'prefix'
    ) {
      // TODO: snackbar with error
      return;
    }
    if (components.length === 3) {
      if (!['and', 'to'].includes(components[1])) {
        // TODO: snackbar with error
        return;
      }
      alg = new Algorithm({
        keyword_type_1: components[0],
        keyword_type_2: components[2],
        joint: components[1],
      });
    } else if ([...this.buildingComponents].length === 2) {
      alg = new Algorithm({
        keyword_type_1: components[0],
        keyword_type_2: components[2],
        joint: '',
      });
    }
    if (!!alg) {
      this.$store.dispatch('algorithms/addNewAlgorithm', alg);
      this.buildingComponents = [];
    }
  }
}
</script>

<style scoped>
</style>