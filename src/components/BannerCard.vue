<script setup>
    import { ICONS } from '@/data/icons';
    import { CYBER } from '@/data/cyber';
</script>

<template>
    <!-- <Detail :id="id" type="cyber" :icons="icons" :links="links"></Detail> -->

    <div :id="id" @click="openModal" class="flex flex-col md:flex-row rounded-[2.5rem] bg-card p-5 my-6 border border-solid border-transparent hover:border-color-border hover:cursor-pointer">
        <div class="w-full md:w-[20%]">
            <img class="h-20 max-h-20 w-auto max-w-[unset] m-auto" :src="'./icons/' + ICONS[id]?.icon" :alt="ICONS[id]?.name"/>
        </div>
        <div class="hidden md:flex w-[90%] justify-around">
            <template v-for="key in ['rank', 'room', 'level', 'badge']">
                <div class="flex flex-col justify-center gap-2" v-if="CYBER[id][key] !== undefined">
                    <p class="text-classic-p2 font-bold text-center">{{ CYBER[id][key].value }}</p>
                    <p class="text-classic-m1 font-medium text-center">{{ CYBER[id][key].name }}</p>
                </div>
            </template>
        </div>
        <div class="grid md:hidden flex-col w-[90%] justify-center mt-3">
            <template v-for="(key, index) in ['rank', 'room', 'level', 'badge']">
                <template v-if="CYBER[id][key] !== undefined">
                    <p class="text-classic-m1 font-medium text-end col-1">{{ CYBER[id][key].name }}</p>
                    <p class="text-classic-p2 font-bold text-start col-2 pl-3">{{ CYBER[id][key].value }}</p>
                </template>
            </template>
        </div>
    </div>
</template>

<script>
    import { defineAsyncComponent } from 'vue';

    const Detail = defineAsyncComponent(() => import('./Detail.vue'));

    export default {
        components: {
            Detail
        },
        props: {
            id: { type: String, default: "" },
            link: { type: String, default: "" }, 
        },
        methods: {
            openModal() {
                window.open(CYBER[this.id].url, '_blank').focus();
            },
        }
    }
</script>
