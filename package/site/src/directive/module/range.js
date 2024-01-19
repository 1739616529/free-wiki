const config_symbol = Symbol("range-config");

const def_option = {
    value: 0,
    satisfy: "color-green",
    discontent: "color-red",
};

function set_status(el) {
    const { value, satisfy, discontent } = el[config_symbol];
    const el_val = parseFloat(el.textContent);
    let class_add = satisfy;
    let class_remove = discontent;
    if (el_val < value) {
        class_add = discontent;
        class_remove = satisfy;
    }
    if (class_add) {
        el.classList.add(class_add);
        el.classList.add("font-family-Dinpro");
    }
    class_remove && el.classList.remove(class_remove);
}

export const install = {
    mounted(el, { value }, vNode) {
        const config = { ...def_option, ...value };
        el[config_symbol] = config;
        set_status(el);
    },

    updated(el, binding, vNode) {
        set_status(el);
    },
};
