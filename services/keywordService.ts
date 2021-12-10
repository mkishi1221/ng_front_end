import BaseService from "./baseService";

export default class KeywordService {
    static async getKeywords() {
        return await BaseService.Instance.get(`/keywords`);
    }

    static async addKeywords(keywords: string) {
        return await BaseService.Instance.put(`/keywords`, keywords);
    }
}