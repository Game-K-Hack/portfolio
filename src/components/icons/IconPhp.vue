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
                cp: { light: "#7377ad", dark: "#7377ad" },
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
        }
    };
</script>