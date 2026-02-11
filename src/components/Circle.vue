<style scoped>
    .gradient-circle {
        position: absolute;
        /* Empêche le cercle de bloquer les clics sur les boutons en dessous */
        pointer-events: none;
        border-radius: 50%;
        z-index: 0;
        /* On utilise transform pour centrer parfaitement le point de spawn */
        transform: translate(-50%, -50%);
        /* Gradient utilisant les variables définies dans positionStyle */
        background: radial-gradient(circle closest-side, var(--circle-color-start), var(--circle-color-end));
        /* Optimisation GPU */
        will-change: transform;
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
        pos: { type: String, default: "50%:50%" }, // Format "top:left"
    },
    setup(props) {
        // Extraction sécurisée des positions
        const positionStyle = computed(() => {
            let [top, left] = props.pos.split(":");

            if (!top.includes("%")) top += "px"
            if (!left.includes("%")) left += "px"

            return {
                top: top,
                left: left,
                width: `${props.size}px`,
                height: `${props.size}px`,
                // On passe les couleurs directement en variables CSS locales pour plus de performance
                '--circle-color-start': `${props.color}1a`,
                '--circle-color-end': `${props.color}00`
            };
        });
        return { positionStyle };
    }
}
</script>
