<template>
    <div :id="id" class="mx-[5%] pt-25">
        <h2 class="uppercase text-4xl sm:text-6xl font-thin">{{ $t(`${id}.title`) }}</h2>
        <slot></slot>
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