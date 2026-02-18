<template>
    <svg version="1.1" viewBox="0 0 455.731 455.731" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[15%]': $options.metadata.rounded}">
        <title :id="uid">{{ $options.metadata.name }}</title>
        <g>
            <rect x="0" y="0" width="455.731" height="455.731" :class="themeClasses.c1"/>
            <g :class="themeClasses.c2">
                <path d="M296.208,159.16C234.445,97.397,152.266,63.382,64.81,63.382v64.348
                    c70.268,0,136.288,27.321,185.898,76.931c49.609,49.61,76.931,115.63,76.931,185.898h64.348
                    C391.986,303.103,357.971,220.923,296.208,159.16z"/>
                <path d="M64.143,172.273v64.348c84.881,0,153.938,69.056,153.938,153.939h64.348
                    C282.429,270.196,184.507,172.273,64.143,172.273z"/>
                <circle cx="109.833" cy="346.26" r="46.088"/>
            </g>
        </g>
    </svg>
</template>

<script>
    export default {
        props: {
            size: { type: [String, Number], default: 24 }
        },
        metadata: {
            name: "RSS",
            type: "Web Feed",
            description: "Format de syndication de contenu Web.",
            experience: "",
            rounded: true,
            theme: {
                cp: { light: "#f78422", dark: "#d96a0d" }, 
                c1: "fill-[#f78422] dark:fill-[#d96a0d]", 
                c2: "fill-[#ffffff] dark:fill-[#e5e7eb]"
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>