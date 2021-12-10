import Vue from "vue";

export const state = () => {
    identifier: ""
    connected: false
};

export const mutations = {
    setIdentifier(state: any, id: string) {
        Vue.set(state, "identifier", id);
    },
    toggleConnected(state: any) {
        Vue.set(state, "connected", !state.connected);
    }
};