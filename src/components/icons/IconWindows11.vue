<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[5px]': $options.metadata.rounded}">
        <title :id="uid">{{ $options.metadata.name }}</title>
        <path :class="themeClasses.c1" d="M67.328 67.331h60.669V128H67.328zm-67.325 0h60.669V128H.003zM67.328 0h60.669v60.669H67.328zM.003 0h60.669v60.669H.003z"/>
    </svg>
</template>

<script>
    export default {
        props: {
            size: { type: [String, Number], default: 24 }
        },
        metadata: {
            name: "Windows 11",
            type: "Système d'exploitation",
            description: "Dernière version majeure du système d'exploitation de Microsoft.",
            experience: "",
            rounded: false,
            theme: {
                cp: { light: "#0078d4", dark: "#005a9e" }, 
                c1: "fill-[#0078d4] dark:fill-[#005a9e]"
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>