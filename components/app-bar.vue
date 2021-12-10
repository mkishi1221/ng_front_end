<template>
  <div
    class="
      h-16
      w-screen
      fixed
      top-0
      flex
      justify-between
      items-center
      bg-white
      dark:bg-cardDark
      z-50
    "
  >
    <div class="flex flex-col">
      <span class="text-black dark:text-white text-2xl ml-8"
        >identity -> brand</span
      >
      <clear-input
        :placeholder="projectName"
        class="ml-8"
        :change="setProjectName"
      />
    </div>
    <div
      class="text-black dark:text-white flex justify-evenly items-center"
      style="width: 60vw"
    >
      <div class="cursor-pointer hover:underline">features</div>
      <div class="cursor-pointer hover:underline">pricing</div>
      <div class="cursor-pointer hover:underline">about us</div>
      <div
        class="rounded max-h-full shadow-lg p-2 cursor-pointer"
        style="background-color: #e06d41"
      >
        try premium
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator';
import WebsocketService from '~/services/websocketService';

@Component({
  name: 'AppBar',
  components: {},
})
export default class AppBar extends Vue {
  // Props
  // Data
  // Hook Callbacks
  // Refs
  // Getters
  get projectName() {
    return this.$store.state.projectConf.projectName ?? 'SET A PROJECTNAME';
  }
  // Setters
  // Watchers
  // Logic
  async setProjectName(evt: any) {
    this.$store.commit('projectConf/setProjectName', evt.target.value);

    if (!!evt && evt !== 'SET A PROJECT NAME') {
      WebsocketService.reconnect({
        name: this.$auth.user!.email as string,
        project: evt.target.value,
      });
    }
  }
}
</script>

<style scoped>
</style>