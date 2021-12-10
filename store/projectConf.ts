import Vue from "vue";

export const state = () => {
    projectName: ""
}

export const mutations = {
    setProjectName(state: any, name: string) {
        Vue.set(state, "projectName", name);
    }
}