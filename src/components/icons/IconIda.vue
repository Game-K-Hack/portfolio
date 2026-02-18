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
            name: "IDA",
            type: "Decompileur",
            description: "Le désassembleur interactif (Interactive Disassembler), plus connu sous le nom d'IDA Pro, est un désassembleur commercial très utilisé en rétro-ingénierie.",
            experience: "",
            rounded: false,
            theme: {
                cp: { light: "#62cccc", dark: "#4c9a9a" },
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>