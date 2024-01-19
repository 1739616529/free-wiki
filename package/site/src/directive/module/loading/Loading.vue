<template>
    <div class="htmleaf-container">
        <svg class="loading-svg" viewBox="22 22 44 44">
            <circle
                cx="44"
                cy="44"
                r="20.2"
                fill="none"
                stroke-width="3.6"
            ></circle>
        </svg>
    </div>
</template>

<style lang="scss" scoped>
.htmleaf-container {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    cursor: wait;
    z-index: 199;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 150px;
    color: #43b0e8;

    .loading-svg {
        color: #43b0e8;
        width: 150px;
        height: 150px;
        display: block;
        overflow: hidden;
        font-size: 30px;
        animation: rotation 1.6s ease-in-out infinite;

        circle {
            stroke: currentColor;
            animation: loading-animation 1.4s ease-in-out infinite;
            stroke-dasharray: 80px, 200px;
            stroke-dashoffset: 0px;
        }
    }
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes loading-animation {
    0% {
        stroke-dasharray: 1px, 200px;
        stroke-dashoffset: 0px;
    }

    50% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -15px;
    }

    100% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -125px;
    }
}
</style>
