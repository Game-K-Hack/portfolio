<script setup>
    import { ref, computed, onMounted } from 'vue';
    import { marked } from 'marked';
    import Skill from '../components/Skill.vue';
    import 'github-markdown-css/github-markdown.css';
    import { ICONS } from '@/data/icons';

    const props = defineProps({
        id: { type: String, default: "modal-readme" },
        type: { type: String, default: "projects" },
        icons: { type: Array, default: () => [] },
        links: { type: Array, default: () => [] },
    });

    const markdownText = ref('');
    const dialogRef = ref(null);

    const loadMarkdown = async () => {
        try {
            const response = await fetch(`./${props.type}/${props.id}/README.md`);
            if (!response.ok) throw new Error('Fichier non trouvé');
            let text = await response.text();
            text = text.replaceAll('](./', `](./${props.type}/${props.id}/`);
            text = text.replaceAll(' src="./', ` src="./${props.type}/${props.id}/`);
            text = text.replaceAll(' href="./', ` href="./${props.type}/${props.id}/`);
            markdownText.value = text;
        } catch (error) {
            markdownText.value = `### Erreur\nImpossible de charger le fichier : ./${props.type}/${props.id}/README.md`;
            console.error("Erreur de fetch :", error);
        }
    };

    const outputHtml = computed(() => { return marked.parse(markdownText.value || ''); });
    const openModal = () => { dialogRef.value?.showModal(); };
    const closeModal = () => {
        dialogRef.value?.close();
        
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };

    onMounted(() => { loadMarkdown(); });
    defineExpose({ openModal, closeModal });
</script>

<template>
    <dialog :id="id" ref="dialogRef" @click="e => e.target.id === id && closeModal()" 
        class="w-[80%] mx-[10%] mt-5 rounded-2xl p-0 shadow-2xl bg-background-readme text-text backdrop:bg-black/50">
        <div class="p-6">
            <div class="flex justify-between items-center mb-4">
                <h2 class="uppercase text-classic-p4 font-thin">{{ $t(`${type}.${id}.title`) }}</h2>
                <div class="flex flex-row gap-2.5">
                    <Skill v-for="icon in icons" :id="icon" :enabledHover="false" />
                </div>
            </div>

            <div class="space-y-4 text-slate-400 mt-4 text-justify">{{ $t(`${type}.${id}.description`) }}</div>

            <div class="flex flex-row gap-2">
                <span class="w-5"></span>
                <a target="_blank" rel="noopener noreferrer" v-for="i in links" :href="i.url" class="w-auto mt-5">
                    <img class="w-auto h-10 max-w-none" :src="'./icons/' + ICONS[i.icon]?.icon" :alt="ICONS[i.icon]?.name"/>
                </a>
            </div>

            <span class="w-full h-px bg-text block my-8"></span>

            <div class="min-h-screen p-8">
                <article v-html="outputHtml" class="markdown-body custom-markdown-style"></article>
            </div>
        </div>
    </dialog>
</template>

<style scoped>
    .custom-markdown-style {
        background-color: transparent !important;
        color: inherit !important;
    }

    /* Résolution du problème de résolution d'image dans les README, montré par Google Lighthouse, résolu par Gemini */
    /* https://developer.chrome.com/docs/lighthouse/best-practices/image-aspect-ratio?utm_source=lighthouse&utm_medium=devtools&hl=fr */
    .custom-markdown-style :deep(img) {
        max-width: 100%;
        height: auto;        /* Force le respect du ratio d'origine */
        object-fit: contain; /* Évite la déformation si une taille fixe est imposée */
        aspect-ratio: auto;  /* Indique au navigateur de suivre le ratio du fichier */
    }
</style>

<style>
    .custom-markdown-style div[align="center"], 
    .custom-markdown-style p[align="center"] {
        display: block ruby !important;
    }
</style>
