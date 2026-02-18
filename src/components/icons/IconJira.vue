<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[15%]': $options.metadata.rounded}">
        <title :id="uid">{{ $options.metadata.name }}</title>
        <defs>
            <linearGradient :id="`grad-a-${uid}`" gradientUnits="userSpaceOnUse" x1="22.034" y1="9.773" x2="17.118" y2="14.842" gradientTransform="scale(4)">
                <stop offset=".176" :stop-color="themeColors.stop1"/>
                <stop offset="1" :stop-color="themeColors.stop2"/>
            </linearGradient>
            <linearGradient :id="`grad-b-${uid}`" gradientUnits="userSpaceOnUse" x1="16.641" y1="15.564" x2="10.957" y2="21.094" gradientTransform="scale(4)">
                <stop offset=".176" :stop-color="themeColors.stop1"/>
                <stop offset="1" :stop-color="themeColors.stop2"/>
            </linearGradient>
        </defs>
        <path d="M108.023 16H61.805c0 11.52 9.324 20.848 20.847 20.848h8.5v8.226c0 11.52 9.328 20.848 20.848 20.848V19.977A3.98 3.98 0 00108.023 16zm0 0" :class="themeClasses.c1"/>
        <path d="M85.121 39.04H38.902c0 11.519 9.325 20.847 20.844 20.847h8.504v8.226c0 11.52 9.328 20.848 20.848 20.848V43.016a3.983 3.983 0 00-3.977-3.977zm0 0" :fill="`url(#grad-a-${uid})`"/>
        <path d="M62.219 62.078H16c0 11.524 9.324 20.848 20.848 20.848h8.5v8.23c0 11.52 9.328 20.844 20.847 20.844V66.059a3.984 3.984 0 00-3.976-3.98zm0 0" :fill="`url(#grad-b-${uid})`"/>
    </svg>
</template>

<script>
    export default {
        props: {
            size: { type: [String, Number], default: 24 }
        },
        metadata: {
            name: "Jira",
            type: "Gestion de projet",
            description: "Outil de suivi de tickets et de gestion de projets agiles.",
            experience: "",
            rounded: false,
            theme: {
                cp: { light: "#2684ff", dark: "#0052cc" },
                c1: "fill-[#2684ff] dark:fill-[#4c9aff]",
                stop1: { light: "#0052cc", dark: "#2684ff" },
                stop2: { light: "#2684ff", dark: "#4c9aff" }
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme },
            themeColors() {
                // Simplified logic for gradient stops based on a hypothetical dark mode state
                // In a real app, this could be tied to a global theme provider
                return {
                    stop1: this.$options.metadata.theme.stop1.light,
                    stop2: this.$options.metadata.theme.stop2.light
                }
            }
        }
    };
</script>