<template>
  <t-section title="manage keywords">
    <template v-slot:cards>
      <t-card class="mt-2">
        <template v-slot:title> filter keywords </template>
        <t-input :value.sync="filter" placeholder="Search for something" />
        <div class="flex flex-wrap gap-3">
          <t-menu context v-for="(k, i) in keywords" :key="i">
            <template v-slot:activator>
              <t-chip
                :key="i"
                color="#ffffff"
                :label="k.keyword"
              />
            </template>
            <t-menu-entry> whitelist </t-menu-entry>
            <t-menu-entry @click="blacklistKeyword(k)">
              blacklist
            </t-menu-entry>
          </t-menu>
          <div v-if="keywordsLoading">
            <t-icon icon="mdi-loading" class="mt-2" spinning />
          </div>
        </div>
      </t-card>
      <t-card>
        <template v-slot:title> blacklisted keywords </template>
        <div class="flex flex-wrap gap-3">
          <t-menu context v-for="(k, i) in blacklistedKeywords" :key="i">
            <template v-slot:activator>
              <t-chip
                :key="i"
                :color="colors.blacklisted"
                :label="k.keyword"
              />
            </template>
            <t-menu-entry> remove label </t-menu-entry>
          </t-menu>
          <div v-if="blacklistedLoading">
            <t-icon icon="mdi-loading" class="mt-2" spinning />
          </div>
        </div>
      </t-card>
    </template>
  </t-section>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator';
import Theme from '~/helper/Theme';
import Keyword from '~/classes/Keyword';

@Component({
  name: 'KeywordSection',
  components: {},
})
export default class KeywordSection extends Vue {
  // Props

  // Data
  filter = '';
  // Hook Callbacks
  // Refs
  // Getters
  get colors() {
    return Theme.colors;
  }
  get keywords() {
    let words = this.$store.state.keywords.keywords ?? [];
    words = words.filter((w: Keyword) => w.word.includes(this.filter));
    return words;
  }
  get blacklistedKeywords() {
    return this.$store.state.keywords.blacklisted ?? [];
  }
  get keywordsLoading() {
    return this.$store.state.keywords.loading ?? false;
  }
  get blacklistedLoading() {
    return this.$store.state.keywords.blacklistedLoading ?? false;
  }
  get wsConnected() {
    return !!this.$store.state.websocketConf.identifier;
  }
  // Setters

  // Watchers
  @Watch('wsConnected')
  async OnProjectChange(change: boolean) {
    if (change) {
      this.$store.dispatch('keywords/init');
    }
  }

  // Logic
  blacklistKeyword(toBlacklist: Keyword) {
    this.$store.dispatch('keywords/makeBlacklisted', toBlacklist);
  }
}
</script>

<style scoped>
</style>