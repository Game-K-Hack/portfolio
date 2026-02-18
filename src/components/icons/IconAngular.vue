<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[15%]': $options.metadata.rounded}">
        <title :id="uid">{{ $t("skills.items.angular.name") }}</title>
        <defs>
            <linearGradient :id="uid + '-a'" x1="14.704" x2="110.985" y1="46.27" y2="92.024" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse">
                <stop offset="0" :stop-color="themeClasses.c8"/>
                <stop offset=".24" :stop-color="themeClasses.c1"/>
                <stop offset=".352" :stop-color="themeClasses.c2"/>
                <stop offset=".494" :stop-color="themeClasses.c3"/>
                <stop offset=".745" :stop-color="themeClasses.c4"/>
                <stop offset="1" :stop-color="themeClasses.c7"/>
            </linearGradient>
            <linearGradient :id="uid + '-b'" x1="28.733" x2="91.742" y1="117.071" y2="45.195" gradientTransform="matrix(1 0 0 -1 0 130)" gradientUnits="userSpaceOnUse">
                <stop offset="0" :stop-color="themeClasses.c5"/>
                <stop offset="1" :stop-color="themeClasses.c6" stop-opacity="0"/>
            </linearGradient>
        </defs>
        <path :fill="'url(#' + uid + '-a)'" d="m124.5 21.3-4.4 68.6L78.3 0l46.2 21.3zm-29 88.7L64 128l-31.5-18 6.4-15.5h50.3l6.3 15.5zM64 34.1l16.5 40.2h-33L64 34.1zM7.9 89.9 3.5 21.3 49.7 0 7.9 89.9z"/>
        <path :fill="'url(#' + uid + '-b)'" d="m124.5 21.3-4.4 68.6L78.3 0l46.2 21.3zm-29 88.7L64 128l-31.5-18 6.4-15.5h50.3l6.3 15.5zM64 34.1l16.5 40.2h-33L64 34.1zM7.9 89.9 3.5 21.3 49.7 0 7.9 89.9z"/>
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
                cp: { light: "#f60a48", dark: "#e40035" }, 
                c1: "#f60a48", 
                c2: "#f20755", 
                c3: "#dc087d", 
                c4: "#9717e7", 
                c5: "#ff31d9", 
                c6: "#ff5be1", 
                c7: "#6c00f5", 
                c8: "#e40035"
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>