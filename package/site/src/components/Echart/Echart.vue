<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";
import { ref } from "vue";
import { watch } from "vue";

const props = defineProps({
    data: {
        type: Array,
        default: () => [1, 2, 3],
    },
    resetConfig: {
        type: Function,
        default: (config) => config,
    },
});

const echart_el = ref();
let config = {};
let echart_instance = null;

const get_config = function () {
    config = props.resetConfig({
        textStyle: {
            fontFamily: "Ping Fang SC",
        },
        grid: {
            left: "50",
            top: "50",
            right: "0",
            bottom: "35",
        },
        legend: {
            left: 0,
        },
        xAxis: {
            type: "category",
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            // axisLabel: {
            //     formatter: "{value}%"
            // },
        },
        yAxis: {
            type: "value",
            splitLine: {
                show: false,
            },
            axisLine: {
                onZero: false,
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                formatter: "{value}%",
            },
        },
        series: [
            // @ts-ignore
            {
                name: "line",
                type: "line",
                data: props.data,
            },
        ],
    });
};

const set_config = function () {
    echart_instance.setOption(config);
};

const rerender = function () {
    get_config();
    set_config();
};

const create_echart_instance = function () {
    const $el = echart_el.value;
    echart_instance = echarts.init($el);
};

const init = function () {
    create_echart_instance();
    rerender();
};

watch(
    () => props.data,
    () => {
        rerender();
    }
);

defineExpose({
    rerender,
});

onMounted(() => {
    init();
});
</script>
<template>
    <div ref="echart_el" class="echart-el"></div>
</template>
<style lang="scss" scoped>
.echart-el {
    width: 100%;
    height: 100%;
}
</style>
<style lang="scss"></style>
