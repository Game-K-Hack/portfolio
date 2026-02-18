<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[15%]': $options.metadata.rounded}">
        <title :id="uid">{{ $options.metadata.name }}</title>
        <defs>
            <linearGradient :id="uid + '-a'" x1="15.959" x2="44.307" y1="-13.014" y2="15.333" gradientTransform="matrix(1 0 0 -1 0 61)" gradientUnits="userSpaceOnUse">
                <stop offset=".097" :stop-color="themeClasses.c1"/>
                <stop offset=".301" :stop-color="themeClasses.c2"/>
                <stop offset=".621" :stop-color="themeClasses.c3"/>
                <stop offset=".864" :stop-color="themeClasses.c4"/>
                <stop offset="1" :stop-color="themeClasses.c5"/>
            </linearGradient>
            <linearGradient :id="uid + '-b'" x1="4.209" x2="20.673" y1="48.941" y2="65.405" gradientTransform="matrix(1 0 0 -1 0 61)" gradientUnits="userSpaceOnUse">
                <stop offset=".118" :stop-color="themeClasses.c6"/>
                <stop offset=".418" :stop-color="themeClasses.c7"/>
                <stop offset=".696" :stop-color="themeClasses.c8"/>
                <stop offset=".833" :stop-color="themeClasses.c9"/>
            </linearGradient>
            <linearGradient :id="uid + '-c'" x1="-10.102" x2="45.731" y1="5.836" y2="61.669" gradientTransform="matrix(1 0 0 -1 0 61)" gradientUnits="userSpaceOnUse">
                <stop offset=".107" :stop-color="themeClasses.c10"/>
                <stop offset=".214" :stop-color="themeClasses.c11"/>
                <stop offset=".425" :stop-color="themeClasses.c12"/>
                <stop offset=".605" :stop-color="themeClasses.c13"/>
                <stop offset=".743" :stop-color="themeClasses.c14"/>
                <stop offset=".823" :stop-color="themeClasses.c15"/>
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
            rounded: false,
            theme: {
                cp: { light: "#7F52FF", dark: "#6433E0" },
                c1: "#0095d5",
                c2: "#238ad9",
                c3: "#557bde",
                c4: "#7472e2",
                c5: "#806ee3",
                c6: "#0095d5",
                c7: "#3c83dc",
                c8: "#6d74e1",
                c9: "#806ee3",
                c10: "#c757bc",
                c11: "#d0609a",
                c12: "#e1725c",
                c13: "#ee7e2f",
                c14: "#f58613",
                c15: "#f88909",
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>