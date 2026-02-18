<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[15%]': $options.metadata.rounded}">
        <title :id="uid">{{ $options.metadata.name }}</title>
        <path d="m258 234s-33.168-53.668-36-84c-3.4297-36.719 24-108 24-108" fill="none" :stroke="themeClasses.cp.light" stroke-linecap="round" stroke-linejoin="round" stroke-width="36"/>
        <path d="m246.14 31.363a18.002 18.002 0 0 0-9.7012 2.8848s-19.41 12.154-41.521 29.094c-22.112 16.939-47.159 37.623-60.576 61.277a18.002 18.002 0 0 0-2e-3 2e-3c-13.959 24.614-19.148 58.35-22.496 87.406-3.3481 29.056-3.8418 53.098-3.8418 53.098a18.002 18.002 0 1 0 35.992 0.75s0.47502-22.508 3.6113-49.727c3.1362-27.217 9.9462-59.478 18.049-73.768l2e-3 -2e-3c7.5614-13.329 30.512-34.645 51.154-50.459 20.644-15.815 38.746-27.168 38.746-27.168a18.002 18.002 0 0 0-9.416-33.389z" opacity=".3" fill="black" />
        <path d="m126 258s1.9375-93.098 24-132c20.977-36.984 96-84 96-84" fill="none" :class="themeClasses.c1" stroke-linecap="round" stroke-linejoin="round" stroke-width="36"/>
        
        <path d="m348 240c0 46.391-37.609 84-84 84s-84-37.609-84-84 37.609-84 84-84 84 37.609 84 84z" :class="themeClasses.c2" />
        <path transform="scale(.75)" d="m240.12 315c-0.07288 1.6581-0.11719 3.324-0.11719 5 0 61.854 50.146 112 112 112s112-50.146 112-112c0-1.676-0.04431-3.3419-0.11719-5-2.6165 59.533-51.705 107-111.88 107-60.178 0-109.27-47.467-111.88-107z" opacity=".3" fill="black"/>
        <path transform="scale(.75)" d="m352 208c-61.854 0-112 50.146-112 112 0 1.676 0.04431 3.3419 0.11719 5 2.6165-59.533 51.705-107 111.88-107s109.27 47.467 111.88 107c0.07288-1.6581 0.11719-3.324 0.11719-5 0-61.854-50.146-112-112-112z" fill="#fff" opacity=".3"/>

        <path d="m204 276c0 46.391-37.609 84-84 84s-84-37.609-84-84 37.609-84 84-84 84 37.609 84 84z" :class="themeClasses.c3" />
        <path transform="scale(.75)" d="m48.117 363c-0.072873 1.6581-0.11719 3.324-0.11719 5 0 61.854 50.146 112 112 112s112-50.146 112-112c0-1.676-0.04431-3.3419-0.11719-5-2.6165 59.533-51.705 107-111.88 107-60.178 0-109.27-47.467-111.88-107z" opacity=".3" fill="black"/>
        <path transform="scale(.75)" d="m160 256c-61.854 0-112 50.146-112 112 0 1.676 0.044315 3.3419 0.11719 5 2.6165-59.533 51.705-107 111.88-107 60.178 0 109.27 47.467 111.88 107 0.07288-1.6581 0.11719-3.324 0.11719-5 0-61.854-50.146-112-112-112z" fill="#fff" opacity=".3"/>
    </svg>
</template>

<script>
    export default {
        props: {
            size: { type: [String, Number], default: 24 }
        },
        metadata: {
            name: "CherryTree",
            type: "Prise de notes hierarchique",
            description: "Une application de prise de notes hiérarchique sous forme de base de données.",
            experience: "",
            rounded: false,
            theme: {
                cp: { light: "#087142", dark: "#065a35" }, 
                c1: "stroke-[#24aa6e] dark:stroke-[#1d8a59]", 
                c2: "fill-[#d41717] dark:fill-[#b01313]", 
                c3: "fill-[#fd4747] dark:fill-[#e03a3a]"
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>