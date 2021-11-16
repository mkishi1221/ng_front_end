<template>
  <div class="w-screen h-screen bg-black">
    <div class="container mx-auto">
      <t-card>
        <template v-slot:title>
          testkanwldknwalk
        </template>
        <t-input placeholder="Search for something" />
        <t-chip color="#ff0000" label="hi" border />
      </t-card>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'LandingPage',
  components: {},
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