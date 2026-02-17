<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[5px]': $options.metadata.rounded}">
        <title :id="uid">{{ $options.metadata.name }}</title>
        <image
            href="data:image/png;base64,UklGRmQCAABXRUJQVlA4IFgCAABwDQCdASo8ADwAPm0sk0akIiGhKhmboIANiUAZ8aGrZ4l9fj1AbZTzAfq764fpA8//qOWt4aBW06kSM1iAPAGMl6Cev5lLI5MagLj9NBzTir950QGK+nRDmxSbF727lddM99IzGxXSeqt+p2Ra3Gljv5IAAAD+/v9Gb6sSH4c85p9I3SaVbhIs7dgh/zNucOwLiAJIMTa4EL6jea+UEwmUI6wsWsAvnxKXUGIfFAIl9Pm4Km/QRMuXwRxeVw/7/wBTSxfng6rLZiQ4J2AdYcfbXneauGXFp8OP4rVIVV+Ohyzn+0NstynYu1s6TDMGvHeSrpbLVvlTtmGQXA1RHDPpyNvKhioKM9VuhJsNZJLlSYr8Py8SzokGoGNwAjQ79l5GZIFCUfdnSAfLes0w+MYZaPNGd1f/NuzfTuLxHy423Ck6U5s9Qn79ubengCJP5AvBxhcPUKH85EH+OX7DsqCT889sMJGS69n3Sz59vYShfBRUGr7OyZM6zIHjIjXbPoSe/T9LFp+onF6sJBUj4L/DvXN/9MaW9fA7XYtQPQKEkg1s6MGZX56VJlB97XcOaDC3mq6zC8EuiP3BngClv1oxu2l8I1hirR2192wwNvPWe542jawv/W3q19j4WKda1OKwhXPGMF48qBhz8InKlklQG0D/fYnMU5me0xFBlqVlRnxIc5HB0UJAktSMeK6ydmg8Thz0vPUNGal+zWNv5x4htVwdfHv6aG82L5O/eoYgMxO0Ri2Vi8LJKpYFUbZAaOvJLxcvDXnb8Z3gy3cE04yKlOgTaAAAAAA="
            width="60" height="60" />
    </svg>
</template>

<script>
    export default {
        props: {
            size: { type: [String, Number], default: 24 }
        },
        metadata: {
            name: "Squash TM",
            type: "Outil de test",
            description: "Suite d'outils de test logiciel français dédiée à la qualité logicielle et au management de tests, manuels ou automatisés.",
            experience: "",
            rounded: true,
            theme: {
                cp: { light: "#aac5de", dark: "#aac5de" },
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>