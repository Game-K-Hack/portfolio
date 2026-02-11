<!-- <script setup>
    import { ICONS } from '@/data/icons';
</script> -->

<template>
    <div class="flex flex-row gap-10 p-5 pb-15 justify-center backdrop-blur-md fixed z-10 w-full top-0 items-start" style="mask:linear-gradient(black, black, transparent);">
        <div @click="openModal(id)" v-for="id in ids" class="flex flex-row gap-2 hover:cursor-pointer hover:font-bold">
            <!-- <img :src="'./icons/' + ICONS[id]?.icon"> -->
            <p class="text-xl">{{ $t(`${id}.title`) }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            ids: { type: Array, default: () => [] },
        },
        methods: {
            openModal(id) {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }
        }
    }
</script>
