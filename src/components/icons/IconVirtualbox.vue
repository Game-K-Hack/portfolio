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
            name: "VirtualBox",
            type: "Virtualisation",
            description: "",
            experience: "",
            rounded: true,
            theme: {
                cp: { light: "#00768b", dark: "#00768b" },
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>