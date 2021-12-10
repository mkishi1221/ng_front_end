import Name from "~/classes/Name";
import Vue from "vue";

export const state = () => {
    names: []
}

export const mutations = {
    setNames(state: any, names: Name[]) {
        Vue.set(state, "names", names);
    }
}