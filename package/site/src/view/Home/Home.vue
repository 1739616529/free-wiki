<script setup>
import { api_test } from "src/api/api.home";

const handle_click_test = function () {
    api_test();
};
</script>
<template>
    <a-button v-loading="false" @click="handle_click_test"> 123 </a-button>
    <!-- <echart></echart> -->
</template>
<style lang="scss" scoped>
* {
    color: $test-color;
}
</style>
<style lang="scss"></style>
