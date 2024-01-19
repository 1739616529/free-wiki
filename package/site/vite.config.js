import { UserConfigFn, UserConfig, } from "vite";
import vue from "@vitejs/plugin-vue";
import { join, } from "path";
import Component from "unplugin-vue-components/vite";
import { AntDesignVueResolver, } from "unplugin-vue-components/resolvers";
import legacy from "@vitejs/plugin-legacy";
import { createHtmlPlugin, } from "vite-plugin-html";
import pkg from "./package.json";
import dayjs from "dayjs";
import deepmager from "deepmerge";
import VueJsx from "@vitejs/plugin-vue-jsx";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";

const app_build_info = {
    version: pkg.version,
    time: dayjs().format("YYYYMMDD HH:mm:ss"),
};




/**
 * @type UserConfigFn
 */
export default function ({ mode, }) {


    /**
     * @type UserConfig
     */
    let config = {
        root: __dirname,
        base: "./",
        resolve: {
            alias: {
                "src": join(__dirname, "./src"),
            },
        },
        build: {
            emptyOutDir: true,

        },
        server: {
            host: true,
            port: 9892,
            proxy: {
                "^/dev": {
                    target: "http://127.0.0.1:7001",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/\/dev/, ""),
                },
            },
        },
        plugins: [
            vue(),
            VueJsx(),
            UnoCSS(),
            AutoImport({
                imports: ["vue", "vue-router", "pinia",],
                dts: join(__dirname, "./types/auto-imports.dev.d.ts"),
            }),
            Component({
                dts: join(__dirname, "./types/components.dev.d.ts"),
                resolvers: [
                    AntDesignVueResolver({
                        importStyle: false,
                    }),
                ],
            }),

            createHtmlPlugin({
                inject: {
                    data: {
                        injectScript: `<script> window.app_build_info = ${JSON.stringify(app_build_info)} </script>`,
                    },
                },
            }),

        ],
        css: {
            devSourcemap: true,
            preprocessorOptions: {
                scss: {
                    javascriptEnable: true,
                    additionalData: `
                        @use "src/style/global.scss" as *;
                    `,
                },
            },


        },
    };


    if (process.env.NODE_ENV === "production") {
        /**
        * @type UserConfig
        */
        const _config = {
            build: {
                minify: "terser",
                terserOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                    },
                },
            },
            plugins: [
                legacy({
                    targets: ["ie 6-8", "iOS 7", "Firefox > 20", "chrome > 10",],
                }),

            ],
        };

        config = deepmager(config, _config);
    }

    if (mode === "debug") {
        /**
        * @type UserConfig
        */
        const _config = {
            build: {
                minify: "esbuild",
                sourcemap: true,
            },
        };

        config = deepmager(config, _config);
    }




    return config;

};
