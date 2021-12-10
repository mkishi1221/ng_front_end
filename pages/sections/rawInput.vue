<template>
  <t-section title="add source text">
    <template v-slot:cards>
      <t-card>
        <template v-slot:title>search through text</template>
        <t-input class="w-full" placeholder="find" />
      </t-card>
      <t-card>
        <t-textarea v-model="keywordsAsRawText" :change="addNewKeywords" />
      </t-card>
    </template>
  </t-section>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator';
import Keyword from '~/classes/Keyword';
import KeywordService from '~/services/keywordService';

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
  get keywordsAsRawText() {
    return this.keywords.map((k) => k.keyword).join(' ');
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
        'keywords/setKeywords',
        await KeywordService.getKeywords()
      );
    }
  }

  // Logic
  addNewKeywords(evt: any) {
    let newWords = evt.target.value.split(' ') as string[];
    newWords = newWords.filter(
      (w) => !this.$store.getters["keywords/keywordsAsList"].includes(w)
    );
    console.log(newWords);
    
    this.$store.commit('keywords/addNewKeywords', newWords);
  }
}
</script>

<style scoped>
</style>