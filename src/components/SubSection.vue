<template>
    <div :id="id" class="mx-[10%]">
        <h1 class="uppercase text-2xl sm:text-4xl font-thin">{{ $t(`${id}.title`) }}</h1>
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