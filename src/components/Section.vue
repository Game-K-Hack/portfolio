<template>
    <div :id="id" class="mx-[5%] pt-25">
        <h1 class="uppercase text-6xl font-thin">{{ $t(`${id}.title`) }}</h1>
        <slot />
    </div>
</template>

<script setup>
    defineProps({
        id: {
            type: String,
            required: true
        }
    });
</script>