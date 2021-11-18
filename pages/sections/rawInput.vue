<template>
    <t-section title="add source text">
        <template v-slot:cards>
            <t-card>
                <template v-slot:title>search through text</template>
                <t-input class="w-full" placeholder="find" />
            </t-card>
            <t-card>
                <t-textarea />
            </t-card>
        </template>
    </t-section>
</template>

<script lang='ts'>
import {Component, Prop, Vue} from 'nuxt-property-decorator';

@Component({
    name: 'RawInputSection',
    components: {}
})
export default class RawInputSection extends Vue {
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