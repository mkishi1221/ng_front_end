import Algorithm from "~/classes/Algorithm"

export const state = () => {
    algorithms: []
}

export const mutations = {
    setAlgorithms(state: any, algos: Algorithm[]) {
        state.algorithms = algos;
    }
}