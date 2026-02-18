<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[15%]': $options.metadata.rounded}">
        <title :id="uid">{{ $t("skills.items.sweethome3d.name") }}</title>
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
                cp: { light: "#0066a7", dark: "#0066a7" },
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
        }
    };
</script>