import axios from "axios";
import { default_config } from "./config";
import { message } from "ant-design-vue";

export const axios_instance = axios.create(default_config);

export const $request = {
    get(url, params) {
        return axios_instance.get(url, { params });
    },
    post(url, data) {
        return axios_instance.post(url, { data });
    },
};

// 添加请求拦截器
axios_instance.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axios_instance.interceptors.response.use(
    function (response) {
        const { code, data } = response.data;
        if (/200/.test(code)) return data.data;

        message.error(data);
    },
    function (error) {
        console.error(error);
        return Promise.reject(error);
    }
);
