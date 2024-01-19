import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
    history: createWebHashHistory("/vue3-tmpl/"),
    routes: [
        {
            path: "/",
            redirect: { name: "home" },
        },
        {
            name: "home",
            path: "/home",
            component: () => import("src/view/Home/Home.vue"),
        },
    ],
});
