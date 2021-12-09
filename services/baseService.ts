export default class BaseService {
    public axios: any;
    private static _instance: BaseService;
    private defaultHeader: any = { "content-type": "application/json" };

    // install method that will be called from nuxt plugin injector
    public static install(Vue: any, context: any) {
        BaseService.Instance.axios = context.$axios;
    }

    static get Instance(): BaseService {
        if (BaseService._instance === undefined) {
            BaseService._instance = new BaseService();
        }
        return BaseService._instance;
    }

    setAuth(token: string) {
        this.defaultHeader["authorization"] = `bearer ${token}`;
    }

    async get(path: string, responseType: string = ""): Promise<any | undefined> {
        try {
            return (await this.axios.get(path, { headers: this.defaultHeader, responseType: responseType })).data;
        } catch (ex) {
            throw (ex);
        }
    }

    async post(path: string, data: any = {}, silent: boolean = false): Promise<any | undefined> {
        try {
            return (await this.axios.post(path, data, { headers: this.defaultHeader })).data;
        } catch (ex) {
            throw (ex);
        }
    }

    async postFile(path: string, file: any): Promise<any | undefined> {
        try {
            var formData = new FormData();
            formData.append("file", file);
            return (await this.axios.post(path, formData, { headers: this.defaultHeader })).data;
        } catch (ex) {
            throw (ex);
        }
    }

    async put(path: string, data: any = {}): Promise<any | undefined> {
        try {
            return (await this.axios.put(path, data, { headers: this.defaultHeader })).data;
        } catch (ex) {
            throw (ex);
        }
    }

    async delete(path: string): Promise<any | undefined> {
        try {
            return (await this.axios.delete(path, { headers: this.defaultHeader })).data;
        } catch (ex) {
            throw (ex);
        }
    }
}