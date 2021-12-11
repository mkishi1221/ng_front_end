import Keyword from "~/classes/Keyword";
import BaseService from "./baseService";

export default class PreferenceService {
    static async addBlacklisted(keyword: Keyword) {
        return await BaseService.Instance.post(`/blacklist`, keyword);
    }

    static async getBlacklisted() {
        return await BaseService.Instance.get(`/blacklist`);
    }

    static async addWhitelisted(keyword: Keyword) {
        return await BaseService.Instance.post(`/whitelist`, keyword);
    }
}