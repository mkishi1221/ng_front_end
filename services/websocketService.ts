import { Websocket, WebsocketBuilder } from "websocket-ts";
import BaseService from "./baseService";

interface MessageEvent {
    data: string | Blob;
}

export class WebsocketMsg {
    type!: string;
    content!: string;

    constructor(part: Partial<WebsocketMsg> = {}) {
        Object.assign(this, part);
    }
}

export interface UserConfig {
    name: string;
    project: string;
}

export default class WebsocketService {
    static socket: Websocket;

    static connect(config: UserConfig) {
        WebsocketService.socket = new WebsocketBuilder(`ws://localhost:8000/ws?name=${config.name}&project=${config.project}`)
            .onMessage(WebsocketService.incoming).build();
        BaseService.Instance.store.commit("websocketConf/toggleConnected");
    }

    static disconnect() {
        WebsocketService.socket.close();
        BaseService.Instance.store.commit("websocketConf/toggleConnected");
    }

    static reconnect(config: UserConfig) {
        if (!!WebsocketService.socket) WebsocketService.disconnect();
        WebsocketService.connect(config);
    }

    static incoming(s: Websocket, ev: MessageEvent) {
        const msg = new WebsocketMsg(JSON.parse(ev.data as string));

        switch(msg.type) {
            case "keepalive":
                return;
            case "id":
                BaseService.Instance.store.commit("websocketConf/setIdentifier", msg.content);
                break;
            case "names":
                console.log(msg.content);
                
                BaseService.Instance.store.commit("names/setNames", msg.content);
                break;
            default:
                break;
        }
    }
}