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
            name: "bkcrack",
            type: "Outil de crack",
            description: "Crack legacy zip encryption with Biham and Kocher's known plaintext attack.",
            experience: "",
            rounded: false,
            theme: {
                cp: { light: "#2a899b", dark: "#2a899b" },
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>