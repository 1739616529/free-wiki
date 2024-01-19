import { defineStore, createPinia } from "pinia";

export const mainPinia = createPinia();

export const useRootStore = defineStore("root-store", {
    state: () => {
        return {
            count: 0,
        };
    },
});
