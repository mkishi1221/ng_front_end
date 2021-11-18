<template>
  <div class="flex flex-col">
    <raw-input-section />
    <keyword-section class="mt-16" />
    <algorithm-section class="mt-16" />
    <name-section class="mt-16" />
    <domain-section class="mt-16 mb-8" />
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import RawInputSection from "~/pages/sections/rawInput.vue";
import KeywordSection from "~/pages/sections/keyword.vue";
import AlgorithmSection from "~/pages/sections/algorithm.vue"
import NameSection from "~/pages/sections/name.vue";
import DomainSection from "~/pages/sections/domain.vue"

@Component({
  name: 'LandingPage',
  components: {
    RawInputSection,
    KeywordSection,
    AlgorithmSection,
    NameSection,
    DomainSection
  },
})
export default class LandingPage extends Vue {
  // Props
  // Data
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