<template>
    <t-section title="buy domains">
        <template v-slot:cards>
            <div class="flex">
                <t-input class="w-full mr-4" />
                <div class="max-h-full max-w-max py-2 px-4 w-40 shadow-lg bg-green-800 rounded-xl text-white">
                    buy domains
                </div>
            </div>
        </template>
    </t-section>
</template>

<script lang='ts'>
import {Component, Prop, Vue} from 'nuxt-property-decorator';

@Component({
    name: 'DomainSection',
    components: {}
})
export default class DomainSection extends Vue {
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