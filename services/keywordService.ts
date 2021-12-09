import Keyword from "~/classes/Keyword";
import BaseService from "./baseService";

export default class KeywordService {
    static async getKeywords() {
        return await BaseService.Instance.get("/keywords");
    }

    static async addKeywords(keywords: Keyword[]) {
        return await BaseService.Instance.put("/keywords", keywords);
    }
}