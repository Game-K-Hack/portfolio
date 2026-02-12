<script setup>
    import { ICONS } from '@/data/icons';
</script>

<template>
    <Detail :id="id" type="projects" :icons="icons" :links="links"></Detail>

    <div :id="id" @click="openModal" class="flex flex-col rounded-[2.5rem] bg-card p-2.5 gap-2.5 pb-3.75 border border-solid border-transparent hover:border-color-border hover:cursor-pointer sm:w-[600px] md:w-[600px] lg:w-[470px] 2xl:w-[500px]">
        <img class="rounded-4xl" :src="`./projects/${id}/%DEFAULTBANNER%.png`" :alt="id + ' default banner'"/>
        <div class="flex flex-row justify-between px-8">
            <h1 class="font-bold text-classic-p1 w-full">{{ $t(`projects.${id}.title`) }}</h1>
            <div class="flex flex-row justify-end gap-2">
                <img v-for="i in icons" class="max-w-7.5 max-h-7.5" :src="'./icons/' + ICONS[i]?.icon" :alt="ICONS[id]?.name"/>
            </div>
        </div>
        <p class="text-justify line-clamp-2">{{ $t(`projects.${id}.description`) }}</p>
    </div>
</template>

<script>
    import Skill from '../components/Skill.vue';
    import Detail from './Detail.vue';

    export default {
        components: {
            Skill, 
            Detail
        },
        props: {
            id: { type: String, default: "" },
            icons: { type: Array, default: () => []}, 
            links: { type: Array, default: () => []}, 
        },
        methods: {
            openModal() {
                const dialog = document.getElementById(this.id);
                dialog.showModal();

                document.getElementById(this.id).scrollTo(0, 0);

                const y = window.scrollY;
                const body = document.body;
                body.style.position = 'fixed';
                body.style.top = `-${y}px`;
            },
            closeModal() {
                const dialog = document.getElementById(this.id);
                dialog.close();
            }
        }
    }
</script>
