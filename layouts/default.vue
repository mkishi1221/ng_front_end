<template>
  <div
    class="bg-canvas dark:bg-canvasDark"
    :class="overlay ? 'overflow-hidden max-h-screen' : ''"
    :style="`backgroundImage: ${backgroundImg}`"
  >
    <app-bar />
    <nuxt class="pt-20" />
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import SettingsService from '~/services/settingsService';
import WebsocketService from '~/services/websocketService';
import Dexie from 'dexie';

@Component({
  name: 'DefaultLayout',
  components: {},
})
export default class DefaultLayout extends Vue {
  // Props
  // Data
  db?: Dexie;
  // Hook Callbacks
  async mounted() {
    if (this.$auth.loggedIn) {
      const profile = await SettingsService.getProfile(
        this.$auth.user!.email as string
      );
      if (!!profile) {
        this.$store.commit(
          'projectConf/setProjectName',
          profile['last_project']
        );
        WebsocketService.connect({
          name: this.$auth.user!.email as string,
          project: this.$store.state.projectConf.projectName,
        });
      }
      this.db = new Dexie('backgroundImg');
      this.db.version(1).stores({ background: '++id,img' });
    }
  }
  // Refs
  // Getters
  get overlay() {
    return this.$store.state.overlay.open;
  }
  get backgroundImg() {
    if (this.db) return (this.db as any).background.first() ?? '';
  }
  // Setters
  // Watchers
  // Logic
}
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 8px;
}
</style>