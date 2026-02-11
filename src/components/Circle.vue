<style scoped>
    .gradient-circle {
        position: absolute;
        pointer-events: none;
        border-radius: 50%;
        z-index: 0;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle closest-side, var(--circle-color-start), var(--circle-color-end) var(--gradient-spread, 100%));
        will-change: transform; /* Optimisation GPU */
    }

    @media (max-width: 1279px) {
        .gradient-circle {
            opacity: 0.9; 
            --gradient-spread: 90%; 
        }
    }
</style>

<template>
    <div class="gradient-circle" :style="positionStyle"></div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: 'BackgroundCircle',
    props: {
        color: { type: String, default: '#3498db' },
        size: { type: Number, default: 800 },
        pos: { type: String, default: "50%:50%" },
    },
    setup(props) {
        const positionStyle = computed(() => {
            let [top, left] = props.pos.split(":");

            if (!top.includes("%")) top += "px"
            if (!left.includes("%")) left += "px"

            return {
                top: top,
                left: left,
                width: `${props.size}px`,
                height: `${props.size}px`,
                '--circle-color-start': `${props.color}1a`,
                '--circle-color-end': `${props.color}00`
            };
        });
        return { positionStyle };
    }
}
</script>
