import Keyword from "~/classes/Keyword";
import KeywordService from "~/services/keywordService";
import Vue from "vue";
import PreferenceService from "~/services/preferenceService";

export const state = () => {
    keywords: []
    blacklisted: []
    loading: false
    blacklistedLoading: false
}

export const mutations = {
    setKeywords(state: any, keywords: Keyword[]) {
        Vue.set(state, "keywords", keywords);
    },
    setBlacklisted(state: any, keywords: Keyword[]) {
        Vue.set(state, "blacklisted", keywords);
    },
    addNewKeywords(state: any, keywords: string[]) {
        state.keywords = state.keywords.concat(keywords);
    },
    addBlacklisted(state: any, toBlacklist: Keyword) {
        state.blacklisted = state.blacklisted.concat([toBlacklist]);
    },
    removeFromGrey(state: any, toRemove: Keyword) {
        state.keywords = state.keywords
            .filter((k: Keyword) => k.keyword !== toRemove.keyword 
                && k.word !== toRemove.word);
    },
    toggleLoading(state: any) {
        Vue.set(state, "loading", !!!state.loading);
    },
    toggleBlacklistedLoading(state: any) {
        Vue.set(state, "blacklistedLoading", !!!state.blacklistedLoading);
    }
}

export const actions = {
    async init({ dispatch }: { dispatch: any }) {
        dispatch("setKeywords");
        dispatch("setBlacklisted");
    },
    async setKeywords({ commit }: { commit: any }) {
        commit("toggleLoading");
        commit("setKeywords", await KeywordService.getKeywords());
        commit("toggleLoading");
    },
    async setBlacklisted({ commit }: { commit: any }) {
        commit("setBlacklisted", await PreferenceService.getBlacklisted());
    },
    async addNewKeywords({ commit }: { commit: any }, keywords: string[]) {
        commit("toggleLoading");
        const res = await KeywordService.addKeywords(keywords.join(" "));
        commit("addNewKeywords", res);
        commit("toggleLoading");
    },
    async makeBlacklisted({ commit }: { commit: any }, toBlacklist: Keyword) {
        commit("toggleBlacklistedLoading");
        commit("removeFromGrey", toBlacklist);
        try {
            await PreferenceService.addBlacklisted(toBlacklist);
            commit("addBlacklisted", toBlacklist);
        } catch (ex) {
            // TODO: handle error messages
            commit("addNewKeywords", [toBlacklist]);
        } finally {
            commit("toggleBlacklistedLoading");
        }
    }
}

export const getters = {
    keywordsAsList(state: any) {
        return state.keywords.map((k: Keyword) => k.keyword);
    }
}