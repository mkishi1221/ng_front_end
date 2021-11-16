<template>
    <div class="bg-white bg-opacity-60 rounded-xl shadow p-4">
        <div class="mb-4" style="color: #4B4B4B;">
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