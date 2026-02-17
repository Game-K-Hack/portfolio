<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[5px]': $options.metadata.rounded}">
        <title :id="uid">{{ $options.metadata.name }}</title>
        <g transform="translate(-247 -114)">
            <g transform="translate(247 114)">
                <path d="M21.2 0h469.6c11.2 0 20.3 9.1 20.3 20.3v471.3c0 11.2-9.1 20.3-20.3 20.3H21.2C10 511.9.9 502.8.9 491.6V20.3C.9 9.1 10 0 21.2 0" :class="themeClasses.c1" />
                <path d="m271.7 131.1 55-58.3 184.4 184.9v233.8c0 11.3-9.1 20.5-20.4 20.5H170.6l-98.1-98.9z" fill-rule="evenodd" clip-rule="evenodd" :class="themeClasses.c2" />
                <g :class="themeClasses.c3">
                    <path d="M301.9 163.8h30.6v153.6h-30.6z" transform="rotate(-30 317.218 240.652)"/>
                    <path d="M118.2 225.3h153.1V256H118.2z" transform="rotate(-60 194.768 240.647)"/>
                    <path d="M199.8 66.6h112.4c11.2 0 20.3 9.1 20.3 20.3v87.3c0 11.2-9.1 20.3-20.3 20.3H199.8c-11.2 0-20.3-9.1-20.3-20.3V86.9c0-11.2 9.1-20.3 20.3-20.3"/>
                    <path d="M312 291.8h112.4c11.2 0 20.3 9.1 20.3 20.3v87.3c0 11.2-9.1 20.3-20.3 20.3H312c-11.2 0-20.3-9.1-20.3-20.3v-87.3c0-11.2 9.1-20.3 20.3-20.3"/>
                    <path d="M87.5 291.8H200c11.2 0 20.3 9.1 20.3 20.3v87.3c0 11.2-9.1 20.3-20.3 20.3H87.5c-11.2 0-20.3-9.1-20.3-20.3v-87.3c0-11.2 9.1-20.3 20.3-20.3"/>
                </g>
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
            name: "Draw.io",
            type: "Tracé de graphes",
            description: "Outil de conception de diagrammes et d'architecture.",
            experience: "Utilisé pour modéliser les bases de données de mon projet de fin d'études.",
            rounded: true,
            theme: {
                cp: { light: "#f08705", dark: "#d67500" }, 
                c1: "fill-[#f08705] dark:fill-[#d67500]", 
                c2: "fill-[#df6c0c] dark:fill-[#b35600]", 
                c3: "fill-[#fff] dark:fill-[#e5e7eb]"
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>
