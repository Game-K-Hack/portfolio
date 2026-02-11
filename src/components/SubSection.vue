<template>
    <div :id="id" class="mx-[10%]">
        <h1 class="uppercase text-5xl font-thin">{{ $t(`${id}.title`) }}</h1>
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