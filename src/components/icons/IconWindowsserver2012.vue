<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[5px]': $options.metadata.rounded}">
        <title :id="uid">{{ $options.metadata.name }}</title>
        <path :class="themeClasses.c1" d="m0 12.402 35.687-4.86.016 34.423-35.67.203zm35.67 33.529.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349-.011 41.34-47.318-6.678-.066-34.739z"/>
    </svg>
</template>

<script>
    export default {
        props: {
            size: { type: [String, Number], default: 24 }
        },
        metadata: {
            name: "Windows Server 2012",
            type: "Système d'exploitation",
            description: "Système d'exploitation développé par Microsoft.",
            experience: "",
            rounded: false,
            theme: {
                cp: { light: "#000d8a", dark: "#0e1ba0" }, 
                c1: "fill-[#000d8a] dark:fill-[#0e1ba0]"
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>