import Keyword from "~/classes/Keyword";
import KeywordService from "~/services/keywordService";

export const state = () => {
    keywords: []
}

export const mutations = {
    setKeywords(state: any, keywords: Keyword[]) {
        state.keywords = keywords;
    },
    async addNewKeywords(state: any, keywords: string[]) {
        const res = KeywordService.addKeywords(keywords.join(" "));
        state.keywords.push(res);
    }
}

export const getters = {
    keywordsAsList(state: any) {
        return state.keywords.map((k: Keyword) => k.keyword);
    }
}