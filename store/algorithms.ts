import Algorithm from "~/classes/Algorithm"
import AlgorithmService from "~/services/algorithmService";
import Vue from "vue";

export const state = () => {
    algorithms: []
}

export const mutations = {
    setAlgorithms(state: any, algorithms: Algorithm[]) {
        Vue.set(state, "algorithms", algorithms);
    },
    addNewAlgorithm(state: any, alg: Algorithm) {
        Vue.set(state, "algorithms", state.algorithms.concat([alg]));
    }
}

export const actions = {
    async setAlgorithms({ commit }: { commit: any }) {
        commit("setAlgorithms", await AlgorithmService.getAlgorithms())
    },
    async addNewAlgorithm({ commit }: { commit: any }, alg: Algorithm) {
        await AlgorithmService.addAlgorithm(alg);
        commit("addNewAlgorithm", alg);
    }
}