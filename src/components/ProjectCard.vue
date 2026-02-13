<script setup>
    import { ICONS } from '@/data/icons';
</script>

<template>
    <Detail ref="detailRef" :id="id" type="projects" :icons="icons" :links="links"></Detail>

    <div :id="id" @click="openModal" class="flex flex-col rounded-[2.5rem] bg-card p-2.5 gap-2.5 pb-3.75 border border-solid border-transparent hover:border-color-border hover:cursor-pointer sm:w-150 md:w-150 lg:w-117.5 2xl:w-125">
        <img class="rounded-4xl"
            sizes="(max-width: 600px) 480px, 800px"
            :src="`./projects/${id}/default-banner-small.webp`"
            :srcset="`./projects/${id}/default-banner-small.webp 500w, ./projects/${id}/default-banner-medium.webp 1000w, ./projects/${id}/default-banner-large.webp 1920w`"
            :alt="id + ' default banner'"
            fetchpriority="high"
            decoding="async"/>
        <div class="flex flex-row justify-between px-8">
            <h2 class="font-bold text-classic-p1 w-full">{{ $t(`projects.${id}.title`) }}</h2>
            <div class="flex flex-row justify-end gap-2">
                <img v-for="i in icons" class="max-w-7.5 max-h-7.5" :src="'./icons/' + ICONS[i]?.icon" :alt="ICONS[i]?.name" width="30" height="30"/>
            </div>
        </div>
        <p class="text-justify line-clamp-2">{{ $t(`projects.${id}.description`) }}</p>
    </div>
</template>

<script>
    import Skill from '../components/Skill.vue';
    import { defineAsyncComponent } from 'vue';

    const Detail = defineAsyncComponent(() => import('./Detail.vue'));

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
            async openModal() {
                if (this.$refs.detailRef) {
                    await this.$refs.detailRef.loadMarkdown();
                }

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
