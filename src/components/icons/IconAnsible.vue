<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[5px]': $options.metadata.rounded}">
        <title :id="uid">{{ $options.metadata.name }}</title>
        <path d="M126 64c0 34.2-27.8 62-62 62S2 98.2 2 64 29.8 2 64 2s62 27.8 62 62" :class="themeClasses.c1" />
        <path d="M65 39.9l16 39.6-24.1-19.1L65 39.9zm28.5 48.7L68.9 29.2c-.7-1.7-2.1-2.6-3.8-2.6-1.7 0-3.2.9-3.9 2.6L34 94.3h9.3L54 67.5l32 25.9c1.3 1 2.2 1.5 3.4 1.5 2.4 0 4.5-1.8 4.5-4.4.1-.5-.1-1.2-.4-1.9z" :class="themeClasses.c2" />
    </svg>
</template>

<script>
    export default {
        props: {
            size: { type: [String, Number], default: 24 }
        },
        metadata: {
            name: "Ansible",
            type: "Logiciel d'automatisation",
            description: "Outil open-source de gestion de configuration, de déploiement d'applications et d'orchestration informatique.",
            experience: "",
            rounded: false,
            theme: {
                cp: { light: "#131211", dark: "#FFFFFF" }, 
                c1: "fill-[#131211] dark:fill-[#FFFFFF]", 
                c2: "fill-[#FFFFFF] dark:fill-[#131211]"
            }
        },
        computed: {
            uid() { return `icon-ansible-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>