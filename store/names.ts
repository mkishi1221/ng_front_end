import Name from "~/classes/Name";
import Vue from "vue";

export const state = () => {
    names: []
}

export const mutations = {
    setNames(state: any, names: any[]) {
        Vue.set(state, "names", names.map(e => new Name(e)));
    }
}