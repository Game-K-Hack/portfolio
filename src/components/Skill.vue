<script setup>
    import { ICONS } from '@/data/icons';
</script>

<template>
    <div :id="id" class="flex flex-row bg-card rounded-[10px] p-2.5 gap-2.5 items-center" :class="{
        'border border-solid border-transparent hover:border-color-border hover:cursor-pointer': enabledHover
    }">
        <img class="w-7.5 h-7.5" :src="'./icons/' + ICONS[id]?.icon" :class="{
            'rounded-[5px]': ICONS[id]?.rounded
        }"/>
        <h1 class="text-3xl w-full font-normal">{{ ICONS[id]?.name }}</h1>
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
