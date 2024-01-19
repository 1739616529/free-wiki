import { createApp } from "vue";
import Loading from "./Loading.vue";

export const install = {
    mounted(el, binding) {
        const app = createApp(Loading);
        const instance = app.mount(document.createElement("div"));
        el.instance = instance;
        if (binding.value) {
            appendEl(el);
        }
    },
    updated(el, binding) {
        if (binding.value === binding.oldValue) return;
        binding.value ? appendEl(el) : removeEl(el);
    },
};

const appendEl = (el) => {
    el.appendChild(el.instance.$el);
};

const removeEl = (el) => {
    el.removeChild(el.instance.$el);
};
