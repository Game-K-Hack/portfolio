<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[15%]': $options.metadata.rounded}">
        <title :id="uid">{{ $t("skills.items.netbeans.name") }}</title>
        <path :class="themeClasses.c1" fill-rule="evenodd" d="M64 128 6.222 96.444V32l22.222 12.444v39.112L64 103.11"/>
        <path :class="themeClasses.c2" fill-rule="evenodd" d="m6.222 32 22.222 12.444L64 24l35.556 20.444L121.778 32 64 0Z"/>
        <path :class="themeClasses.c3" fill-rule="evenodd" d="m64 24 35.556 20.444-35.556 20-35.556-20Z"/>
        <path :class="themeClasses.c4" fill-rule="evenodd" d="m28.444 44.444 35.556 20v38.667L28.444 83.556Z"/>
        <path :class="themeClasses.c5" fill-rule="evenodd" d="m64 64.444 35.556-20v39.112L64 103.11Z"/>
        <path :class="themeClasses.c6" fill-rule="evenodd" d="m64 128 57.778-31.556V32L99.556 44.444v39.112L64 103.11"/>
        <path :class="themeClasses.c7" fill-rule="evenodd" d="M64 128 6.222 96.444l22.222-12.888L64 103.11"/>
        <path :class="themeClasses.c8" fill-rule="evenodd" d="m64 128 57.778-31.556-22.222-12.888L64 103.11"/>
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
                cp: { light: "#1d6ac6", dark: "#165196" },
                c1: "fill-[#a6043f]",
                c2: "fill-[#95d921]",
                c3: "fill-[#dcdfe7] dark:fill-[#b1b4be]",
                c4: "fill-[#fff] dark:fill-[#e5e7eb]",
                c5: "fill-[#c9dae9] dark:fill-[#9ab3c9]",
                c6: "fill-[#1d6ac6] dark:fill-[#165196]",
                c7: "fill-[#ea1f5e]",
                c8: "fill-[#2e90e9]"
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>