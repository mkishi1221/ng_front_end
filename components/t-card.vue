<template>
    <div class="bg-white dark:bg-cardDark bg-opacity-60 rounded-xl shadow-lg pt-3 px-4 pb-4 grid gap-2 my-2">
        <div class="text-cardTitle dark:text-white">
            <slot name="title" />
        </div>
        <slot name="default" />
    </div>
</template>

<script lang='ts'>
import {Component, Prop, Vue} from 'nuxt-property-decorator';

@Component({
    name: 'TCard',
    components: {}
})
export default class TCard extends Vue {
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