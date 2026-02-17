<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[5px]': $options.metadata.rounded}">
        <title :id="uid">{{ $options.metadata.name }}</title>
        <path d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0" :class="themeClasses.c1"/>
        <path d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0" :class="themeClasses.c2"/>
        <path d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0" :class="themeClasses.c3"/>
        <path d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0" :class="themeClasses.c4"/>
        <path d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0" :class="themeClasses.c5"/>
    </svg>
</template>

<script>
    export default {
        props: {
            size: { type: [String, Number], default: 24 }
        },
        metadata: {
            name: "Figma",
            type: "Outil de design UI/UX",
            description: "Plateforme de conception graphique collaborative basée sur le web.",
            experience: "",
            rounded: false,
            theme: {
                cp: { light: "#F24E1E", dark: "#F24E1E" }, 
                c1: "fill-[#0acf83]", 
                c2: "fill-[#a259ff]", 
                c3: "fill-[#f24e1e]", 
                c4: "fill-[#ff7262]", 
                c5: "fill-[#1abcfe]"
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>