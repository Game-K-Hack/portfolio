<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[15%]': $options.metadata.rounded}">
        <title :id="uid">{{ $t("skills.items.sketchup.name") }}</title>
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
                cp: { light: "#0863a2", dark: "#0863a2" },
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
        }
    };
</script>