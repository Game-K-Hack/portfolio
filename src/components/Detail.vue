<script setup>
    import { ref } from 'vue';
    import Skill from '../components/Skill.vue';
    import { ICONS } from '@/data/icons';
    import 'github-markdown-css/github-markdown.css';

    const props = defineProps({
        id: { type: String, default: "modal-readme" },
        type: { type: String, default: "projects" },
        icons: { type: Array, default: () => [] },
        links: { type: Array, default: () => [] },
    });

    const markdownHtml = ref(''); // On stocke directement le HTML
    const dialogRef = ref(null);
    const isLoading = ref(false);

    const loadMarkdown = async () => {
        if (markdownHtml.value || isLoading.value) return;
        isLoading.value = true;
        
        try {
            const [markedModule, response] = await Promise.all([
                import('marked'), // Import parallèle
                fetch(`./${props.type}/${props.id}/README.md`)
            ]);

            if (!response.ok) throw new Error();
            
            let text = await response.text();
            const baseUrl = `./${props.type}/${props.id}/`;
            
            // Unification des remplacements
            text = text.replace(/(src|href)="\.?\//g, `$1="${baseUrl}`)
                    .replace(/\]\(\.\//g, `](${baseUrl}`);

            markdownHtml.value = markedModule.marked.parse(text);
        } catch (e) {
            markdownHtml.value = `<p>Erreur de chargement.</p>`;
        } finally {
            isLoading.value = false;
        }
    };

    const openModal = () => { dialogRef.value?.showModal(); };
    const closeModal = () => {
        dialogRef.value?.close();
        
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };

    defineExpose({ openModal, closeModal, loadMarkdown });
</script>

<template>
    <dialog :id="id" ref="dialogRef" @cancel.prevent="closeModal" @click="e => e.target.id === id && closeModal()" 
        class="w-[80%] mx-[10%] mt-5 rounded-2xl p-0 shadow-2xl bg-background-readme text-text backdrop:bg-black/50">
        <div class="p-6">
            <div class="flex justify-between items-center mb-4">
                <h2 class="uppercase text-classic-p4 font-thin">{{ $t(`${type}.${id}.title`) }}</h2>
                <div class="flex flex-row gap-2.5">
                    <Skill v-for="icon in icons" :id="icon" />
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

            <div class="p-6" v-if="markdownHtml || isLoading">
                <article v-html="markdownHtml" class="markdown-body custom-markdown-style"></article>
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
