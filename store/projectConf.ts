import Vue from "vue";

export const state = () => {
    projectName: ""
}

export const mutations = {
    setProjectName(state: any, name: string | undefined) {
        Vue.set(state, "projectName", name);
    }
}