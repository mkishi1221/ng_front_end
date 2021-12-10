import Vue from "vue";

export const state = () => {
    open: false
}

export const mutations = {
    toggleOpen(state: any) {
        Vue.set(state, "open", !state.open);
    }
}