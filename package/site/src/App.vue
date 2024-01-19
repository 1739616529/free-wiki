<script setup>
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { default_theme } from "src/tmpl/theme";

import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");
</script>

<template>
    <a-config-provider :theme="default_theme" :locale="zhCN">
        <RouterView></RouterView>
    </a-config-provider>
</template>

<style scoped></style>
