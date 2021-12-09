import Vue from "vue";
import BaseService from "~/services/baseService";

export default function(context: any) {
    Vue.use(BaseService, context);
}