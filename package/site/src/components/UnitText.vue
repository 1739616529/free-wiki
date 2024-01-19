<script setup>
const { text, gap } = defineProps({
    text: {
        type: String,
        default: () => "",
    },
    gap: {
        type: Number,
        default: () => 3,
    },
});
</script>

<template>
    <div :style="{ paddingRight: `${gap + 5}px` }" class="UnitText">
        <span
            v-if="!!text"
            class="label"
            :style="{ paddingRight: `${gap}px` }"
            >{{ text }}</span
        >
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.UnitText {
    display: flex;
    align-items: center;
}
</style>
