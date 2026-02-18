<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[15%]': $options.metadata.rounded}">
        <title :id="uid">{{ $options.metadata.name }}</title>
        <image
            href="data:image/png;base64,UklGRowCAABXRUJQVlA4IIACAABwEACdASo8ADwAPm00lkikIqImJhVYoMANiWwAwY4BfgH4k9y5Vrw346cMH3Vye/k1/Lfy3ZAOt55gP0l/YD0QPcB+nPsAfox1nPoAfwD/R+mp7Jv7i/tV7PKfTlgfSuugh0fEh6xQxGSN39VFPDS6XLD6JP7lucLdFXVNbKiEdgrzTDByrzBwVyEtgAD9xiE4twLTjF4+BoCJu7v4A3SCIb0tWem3bX5x1ZH9/hH19v03Ir9RZu//m/GBY1X/Hrdaz2wPMFZJyNJsru2/pJcAu8yV/TPKWntMJY2WB+FW2AeyeC9nirUJ/ohyiHdTIA5Hxn0SdHYgrcRJajw98nzRF+YPb3yWwMRUzchs27/6Tt3c6/P/RhHFF/04J/wYCnU2yl78Bu9k64vp0sfgHwTGyO2Pz04Et9znBMd/BqG3/X6gSiPTKAjoDSpBfUaVIXXckGLAZp/G+h9AxFbCdK3kV+GZosZmBSVwOO4QsMfSF/q+wsvdJhKA28joSkFfnjlbKcouacZKe1AHRO7CmanmSjieAPxhtakvRW0VQg9tUwzjVBu1F8xZPG9KSLShwGBwRpEA/v4B8d976LVXE3/MH60/HGb2sF8ziHi6kfR0jv37T8rBwP6YYUZZ2CJtMe+odrET+ab+TBl28LSvHCF3cXLH3B1OP8zcMXflPpTFgJHnNlIPH9UXNGFi0xgzW314JCQI7anFxwxMmVCPgaB+yY+PiTUWHNu2k1VZ/s7EsQOJ/OteYKcQBAKZtnE5aqmYZ72b3LePqRr/bFp683l0y5WZsKdYDcF6PwP8nh35Cs6sV3EZDaSJsVCHzYX9jps7necIuzCinoSm07QfAAAA"
            width="60" height="60" />
    </svg>
</template>

<script>
    export default {
        props: {
            size: { type: [String, Number], default: 24 }
        },
        metadata: {
            name: "Vegas Pro",
            type: "Conception",
            description: "Logiciel de montage vidéo",
            experience: "",
            rounded: false,
            theme: {
                cp: { light: "#1898d0", dark: "#1898d0" },
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>