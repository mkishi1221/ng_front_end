import Keyword from "~/classes/Keyword";
import BaseService from "./baseService";

export default class PreferenceService {
    static async addBlacklisted(keyword: Keyword) {
        return await BaseService.Instance.put("/blacklist", keyword);
    }

    static async addWhitelisted(keyword: Keyword) {
        return await BaseService.Instance.put("/whitelist", keyword);
    }
}