<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[15%]': $options.metadata.rounded}">
        <title :id="uid">{{ $options.metadata.name }}</title>
        <image
            href="data:image/png;base64,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"
            width="60" height="60" />
    </svg>
</template>

<script>
    export default {
        props: {
            size: { type: [String, Number], default: 24 }
        },
        metadata: {
            name: "QEMU",
            type: "Émulateur",
            description: "Systèmes d'exploitation (et leurs applications) de manière isolée sur une même machine physique",
            experience: "",
            rounded: false,
            theme: {
                cp: { light: "#ff6600", dark: "#ff6600" },
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>