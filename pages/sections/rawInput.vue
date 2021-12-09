<template>
    <t-section title="add source text">
        <template v-slot:cards>
            <t-card>
                <template v-slot:title>search through text</template>
                <t-input class="w-full" placeholder="find" />
            </t-card>
            <t-card>
                <t-textarea v-model="keywordsAsRawText" />
            </t-card>
        </template>
    </t-section>
</template>

<script lang='ts'>
import {Component, Prop, Vue} from 'nuxt-property-decorator';
import Keyword from '~/classes/Keyword';
import KeywordService from '~/services/keywordService';

@Component({
    name: 'RawInputSection',
    components: {}
})
export default class RawInputSection extends Vue {
    // Props

    // Data
    keywords: Keyword[] = [];

    // Hook Callbacks
    async fetch() {
        this.keywords = await KeywordService.getKeywords();
    }
    mounted() {
        console.log(this.keywords);
        
    }

    // Refs

    // Getters
    get keywordsAsRawText() {
        return this.keywords.map(k => k.keyword).join(" ");
    }

    // Setters

    // Watchers

    // Logic

}
</script>

<style scoped>

</style>