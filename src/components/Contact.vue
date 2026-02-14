<template>
    <div class="flex flex-row flex-nowrap gap-3 items-center">
        <img :src="`/icons/${id}.svg`" width="70" height="70" :alt="id">
        <div class="flex flex-col">
            <h3 class="text-classic-p1">{{ $t(`contactme.${id}`) }}</h3>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            id: { type: String, required: true }
        }
    }

    import('marked') // charger la lib markdown une fois les autres composents chargés
</script>
