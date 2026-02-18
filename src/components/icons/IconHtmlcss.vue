<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[15%]': $options.metadata.rounded}">
        <title :id="uid">{{ $t("skills.items.htmlcss.name") }}</title>
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
            rounded: true,
            theme: {
                cp: { light: "#ef6930", dark: "#e3542c" },
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
        }
    };
</script>