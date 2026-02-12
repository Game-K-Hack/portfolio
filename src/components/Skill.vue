<script setup>
    import { ICONS } from '@/data/icons';
</script>

<template>
    <div :id="id" class="flex flex-row bg-card rounded-[10px] p-2.5 gap-2.5 items-center" :class="{
        'border border-solid border-transparent hover:border-color-border hover:cursor-pointer': enabledHover
    }">
        <img class="w-7.5 h-7.5" :src="'./icons/' + ICONS[id]?.icon" :class="{
            'rounded-[5px]': ICONS[id]?.rounded
        }" :alt="ICONS[id]?.name" width="30" height="30"/>
        <h3 class="text-classic-p1 w-full font-normal">{{ ICONS[id]?.name }}</h3>
    </div>
</template>

<script>
    export default {
        props: {
            id: { type: String, default: "" },
            enabledHover: { type: Boolean, default: true },
        },
    }
</script>
