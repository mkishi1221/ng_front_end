import Algorithm from "~/classes/Algorithm";
import BaseService from "./baseService";

export default class AlgorithmService {
    static async getAlgorithms() {
        return await BaseService.Instance.get(`/algorithms`);
    }

    static async addAlgorithm(algorithm: Algorithm) {
        return await BaseService.Instance.put(`/algorithms`, algorithm);
    }
}