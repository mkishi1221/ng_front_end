<template>
  <div light>
    <h1 v-if="error.statusCode === 404">
      <!--       <not-found-page />
 -->
    </h1>
    <h1>
      {{ otherError }}
    </h1>
    <nuxt-link to="/"> Homepage </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
/* import NotFoundPage from "~/components/NotFoundPage.vue";
 */
@Component({
  name: 'ErrorLayout',
  components: {
    /*     NotFoundPage,
     */
  },
})
export default class ErrorLayout extends Vue {
  @Prop({ type: Object })
  error!: any;

  pageNotFound = '404 Page not found';
  otherError = 'Unknown error';

  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  }
}
</script>

<style scoped>
</style>