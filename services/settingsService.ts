import BaseService from "./baseService";

export default class SettingsService {
    static async getProfile(username: string) {
        return BaseService.Instance.rawGet(`/profile?username=${username}`);
    }
}