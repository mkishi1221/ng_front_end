<template>
  <t-section title="add source text">
    <template v-slot:cards>
      <t-card>
        <template v-slot:title>search through text</template>
        <t-input class="w-full" placeholder="find keywords" />
      </t-card>
      <t-card>
        <t-textarea class="border-0 placeholder-gray-400" :change="addNewKeywords" placeholder="add some text" />
      </t-card>
    </template>
  </t-section>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator';
import Keyword from '~/classes/Keyword';

@Component({
  name: 'RawInputSection',
  components: {},
})
export default class RawInputSection extends Vue {
  // Props

  // Data
  // Hook Callbacks

  // Refs

  // Getters
  get keywords(): Keyword[] {
    return this.$store.state.keywords.keywords ?? [];
  }
  get projectName() {
    return this.$store.state.projectConf.projectName ?? '';
  }

  // Setters

  // Watchers

  // Logic
  addNewKeywords(evt: any) {
    let newWords = evt.target.value.split(' ') as string[];
    newWords = newWords.filter(
      (w) => !this.$store.getters["keywords/keywordsAsList"].includes(w)
    );
    if (!!newWords.length) this.$store.dispatch('keywords/addNewKeywords', newWords);
  }
}
</script>

<style scoped>
</style>