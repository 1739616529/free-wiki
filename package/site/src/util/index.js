export const get_url_params = function () {
    const params = new URLSearchParams(
        window.location.hash.split("?")[1] || ""
    );
    const search_params = Object.fromEntries(params);
    return search_params;
};

/**
 * @description 值缓存
 */
export class CacheData {
    constructor() {}
    _data;
    getDataFun = () => {};
    get(...args) {
        if (!this._data) this._data = this.getDataFun(...args);
        return this._data;
    }
    clean() {
        this._data = null;
    }
}

/**
 *
 * @param {object[]} data
 * @param {string[]} key
 * @param {number|string} index
 * @returns number
 * @description "获取row的合并尺寸"
 */
export const merge_row = function (data, key, index) {
    let rowSpan = 0;

    if (index !== 0 && key.every((v) => data[index][v] === data[index - 1][v]))
        return 0;

    for (let i = index; i < data.length; i++) {
        const item = data[i];
        const is_alikes = key.every((v) => data[index][v] === item[v]);
        if (!is_alikes) break;
        rowSpan++;
    }
    return rowSpan;
};
