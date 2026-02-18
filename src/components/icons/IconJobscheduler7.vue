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
            rounded: false,
            theme: {
                cp: { light: "#1f3c88", dark: "#1f3c88" },
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
        }
    };
</script>