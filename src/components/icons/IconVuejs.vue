<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" :width="size" :height="size" :aria-labelledby="uid" class="transition-colors duration-300" :class="{'rounded-[15%]': $options.metadata.rounded}">
        <title :id="uid">{{ $t("skills.items.vuejs.name") }}</title>
        <path d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01" fill="none"/>
        <path :class="themeClasses.c2" d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z"/>
        <path :class="themeClasses.c1" d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z"/>
    </svg>
</template>

<script>
    export default {
        props: {
            size: { type: [String, Number], default: 24 }
        },
        metadata: {
            rounded: true,
            theme: {
                cp: { light: "#41b883", dark: "#41b883" }, 
                c1: "fill-[#41b883] dark:fill-[#41b883]", 
                c2: "fill-[#35495e] dark:fill-[#35495e]"
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>
