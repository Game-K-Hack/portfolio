<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[15%]': $options.metadata.rounded}">
        <title :id="uid">{{ $options.metadata.name }}</title>
        <defs>
            <linearGradient :id="uid + '-a'" x1="15.959" x2="44.307" y1="-13.014" y2="15.333" gradientTransform="matrix(1 0 0 -1 0 61)" gradientUnits="userSpaceOnUse">
                <stop offset=".097" :stop-color="themeColors.stopA1"/>
                <stop offset=".301" :stop-color="themeColors.stopA2"/>
                <stop offset=".621" :stop-color="themeColors.stopA3"/>
                <stop offset=".864" :stop-color="themeColors.stopA4"/>
                <stop offset="1" :stop-color="themeColors.stopA5"/>
            </linearGradient>
            <linearGradient :id="uid + '-b'" x1="4.209" x2="20.673" y1="48.941" y2="65.405" gradientTransform="matrix(1 0 0 -1 0 61)" gradientUnits="userSpaceOnUse">
                <stop offset=".118" :stop-color="themeColors.stopB1"/>
                <stop offset=".418" :stop-color="themeColors.stopB2"/>
                <stop offset=".696" :stop-color="themeColors.stopB3"/>
                <stop offset=".833" :stop-color="themeColors.stopB4"/>
            </linearGradient>
            <linearGradient :id="uid + '-c'" x1="-10.102" x2="45.731" y1="5.836" y2="61.669" gradientTransform="matrix(1 0 0 -1 0 61)" gradientUnits="userSpaceOnUse">
                <stop offset=".107" :stop-color="themeColors.stopC1"/>
                <stop offset=".214" :stop-color="themeColors.stopC2"/>
                <stop offset=".425" :stop-color="themeColors.stopC3"/>
                <stop offset=".605" :stop-color="themeColors.stopC4"/>
                <stop offset=".743" :stop-color="themeColors.stopC5"/>
                <stop offset=".823" :stop-color="themeColors.stopC6"/>
            </linearGradient>
        </defs>
        <path d="m0 60 30.1-30.1L60 60z" :fill="`url(#${uid}-a)`"/>
        <path d="M0 0h30.1L0 32.5z" :fill="`url(#${uid}-b)`"/>
        <path d="M30.1 0 0 31.7V60l30.1-30.1L60 0z" :fill="`url(#${uid}-c)`"/>
    </svg>
</template>

<script>
    export default {
        props: {
            size: { type: [String, Number], default: 24 }
        },
        metadata: {
            name: "Kotlin",
            type: "Langage de programmation",
            description: "Langage de programmation moderne, statiquement typé et orienté objet, utilisé pour le développement Android et multiplateforme.",
            experience: "",
            rounded: false,
            theme: {
                cp: { light: "#7F52FF", dark: "#6433E0" },
                c1: {
                    light: { stopA1: "#0095d5", stopA2: "#238ad9", stopA3: "#557bde", stopA4: "#7472e2", stopA5: "#806ee3" },
                    dark: { stopA1: "#007bb0", stopA2: "#1c6fb0", stopA3: "#4462b5", stopA4: "#5d5bb9", stopA5: "#6858ba" }
                },
                c2: {
                    light: { stopB1: "#0095d5", stopB2: "#3c83dc", stopB3: "#6d74e1", stopB4: "#806ee3" },
                    dark: { stopB1: "#007bb0", stopB2: "#3069b2", stopB3: "#585eb8", stopB4: "#6858ba" }
                },
                c3: {
                    light: { stopC1: "#c757bc", stopC2: "#d0609a", stopC3: "#e1725c", stopC4: "#ee7e2f", stopC5: "#f58613", stopC6: "#f88909" },
                    dark: { stopC1: "#a3479a", stopC2: "#ab4e7e", stopC3: "#b85d4b", stopC4: "#c26626", stopC5: "#c96e10", stopC6: "#cc7007" }
                }
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeColors() {
                // Determine if we should use dark or light variants based on an external state or class
                // Simplified here to merge all stops for the SVG paths
                const theme = this.$options.metadata.theme;
                const mode = 'light'; // This can be dynamic (e.g., this.$isDark ? 'dark' : 'light')
                return {
                    ...theme.c1[mode],
                    ...theme.c2[mode],
                    ...theme.c3[mode]
                };
            }
        }
    };
</script>