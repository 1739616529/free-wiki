export const default_config = {
    /**
     * 超时时间
     */
    // timeout: 50000,

    /**
     * 请求基地址
     */
    baseURL: process.env.NODE_ENV === "development" ? "/dev" : "",

    withCredentials: true,
};
