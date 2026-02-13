<script setup>
    import { ICONS } from '@/data/icons';
</script>

<template>
    <Teleport to="body">
        <Detail ref="detailRef" :id="id" type="projects" :icons="icons" :links="links"></Detail>
    </Teleport>

    <div :id="id" @click="openModal" class="flex flex-col rounded-[2.5rem] bg-card p-2.5 gap-2.5 pb-3.75 border border-solid border-transparent hover:border-color-border hover:cursor-pointer sm:w-150 md:w-150 lg:w-117.5 2xl:w-125">
        
        <img class="rounded-4xl w-full h-auto aspect-600/338 object-cover" 
            width="600" height="338"
            :src="`./projects/${id}/default-banner-small.webp`"
            :srcset="`./projects/${id}/default-banner-small.webp 400w, ./projects/${id}/default-banner-medium.webp 600w, ./projects/${id}/default-banner-large.webp 800w`"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 500px"
            :alt="id + ' default banner'"
            fetchpriority="high"
            decoding="async"/>

        <div class="flex flex-row justify-between px-8">
            <h2 class="font-bold text-classic-p1 w-full min-h-[1.5em] leading-[1.5em]">
                {{ $t(`projects.${id}.title`) }}
            </h2>
            <div class="flex flex-row justify-end gap-2">
                <img v-for="i in icons" :key="i" class="max-w-7.5 max-h-7.5" :src="'./icons/' + ICONS[i]?.icon" :alt="ICONS[i]?.name" width="30" height="30"/>
            </div>
        </div>

        <p class="text-justify line-clamp-2 min-h-12 leading-6">
            {{ $t(`projects.${id}.description`) }}
        </p>
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
                const detailComponent = this.$refs.detailRef;
                if (detailComponent) {
                    await detailComponent.loadMarkdown();
                    detailComponent.openModal();
                    const y = window.scrollY;
                    document.body.style.position = 'fixed';
                    document.body.style.top = `-${y}px`;
                }
            },
            closeModal() {
                const dialog = document.getElementById(this.id);
                dialog.close();
            }
        }
    }
</script>
