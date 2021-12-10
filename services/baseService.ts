export default class BaseService {
    axios: any;
    store: any;
    private static _instance: BaseService;
    private defaultHeader: any = { "content-type": "application/json" };

    // install method that will be called from nuxt plugin injector
    public static install(Vue: any, context: any) {
        BaseService.Instance.axios = context.$axios;
        BaseService.Instance.store = context.store;
    }

    static get Instance(): BaseService {
        if (BaseService._instance === undefined) {
            BaseService._instance = new BaseService();
        }
        return BaseService._instance;
    }

    get wsIdentifier() { return BaseService.Instance.store.state.websocketConf.identifier; }

    setAuth(token: string) {
        this.defaultHeader["authorization"] = `bearer ${token}`;
    }

    getPath(part: string) {
        return `${part}?identifier=${BaseService.Instance.wsIdentifier}`;
    }

    async get(path: string, responseType: string = ""): Promise<any | undefined> {
        try {
            return (await this.axios.get(this.getPath(path), { headers: this.defaultHeader, responseType: responseType })).data;
        } catch (ex) {
            throw (ex);
        }
    }

    async rawGet(path: string): Promise<any | undefined> {
        try {
            return (await this.axios.get(path, { headers: this.defaultHeader })).data;
        } catch (ex) {
            throw (ex);
        }
    }

    async post(path: string, data: any = {}, silent: boolean = false): Promise<any | undefined> {
        try {
            return (await this.axios.post(this.getPath(path), data, { headers: this.defaultHeader })).data;
        } catch (ex) {
            throw (ex);
        }
    }

    async postFile(path: string, file: any): Promise<any | undefined> {
        try {
            var formData = new FormData();
            formData.append("file", file);
            return (await this.axios.post(this.getPath(path), formData, { headers: this.defaultHeader })).data;
        } catch (ex) {
            throw (ex);
        }
    }

    async put(path: string, data: any = {}): Promise<any | undefined> {
        try {
            return (await this.axios.put(this.getPath(path), data, { headers: this.defaultHeader })).data;
        } catch (ex) {
            throw (ex);
        }
    }

    async delete(path: string): Promise<any | undefined> {
        try {
            return (await this.axios.delete(this.getPath(path), { headers: this.defaultHeader })).data;
        } catch (ex) {
            throw (ex);
        }
    }
}