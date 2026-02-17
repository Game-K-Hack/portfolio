<script setup>
    import { ref, computed } from 'vue';
    import { ICONS } from '@/data/icons';
    import Icon from './Icon.vue';

    const props = defineProps({
        id: { type: String, default: "" },
        type: { type: String, default: "skills" },
        enabledDetail: { type: Boolean, default: false }
    });

    const iconRef = ref(null);
    const dialogRef = ref(null);

    const metadata = computed(() => iconRef.value?.metadata || {});

    const openModal = () => {
        if (!props.enabledDetail) return;
        dialogRef.value?.showModal();
        
        const y = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${y}px`;
        document.body.style.width = '100%';
    };

    const closeModal = () => {
        dialogRef.value?.close();
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };

    const getColor = computed(() => {
        const theme = metadata.value?.theme?.cp; 
        return {
            '--dialog-skill-color-header-light': (theme?.light + '40') || '#1e293b', 
            '--dialog-skill-color-header-dark': (theme?.dark + '40') || '#1e293b', 
            '--dialog-skill-color-light': theme?.light || '#1e293b', 
            '--dialog-skill-color-dark': theme?.dark || '#1e293b', 
        };
    });
</script>

<template>
    <dialog ref="dialogRef" @cancel.prevent="closeModal" @click="e => e.target.tagName === 'DIALOG' && closeModal()" class="w-[90%] md:w-[60%] lg:w-[40%] max-w-2xl rounded-2xl p-0 shadow-2xl bg-[var] dark:bg-[#1a1b26] text-slate-200 backdrop:bg-black/60 backdrop:backdrop-blur-sm overflow-hidden m-auto border-0" :style="getColor">
        <div class="p-6 flex justify-between items-start bg-linear-to-r to-transparent from-(--dialog-skill-color-header-light) dark:from-(--dialog-skill-color-header-dark)">
            <div class="flex items-center gap-5">
                <div class="p-3 bg-slate-100/50 dark:bg-slate-900/50 rounded-xl border border-slate-300 darkborder-slate-700">
                    <Icon :id="id" size="48" />
                </div>
                <div>
                    <h2 class="text-2xl font-bold text-text tracking-tight">{{ metadata.name || ICONS[id]?.name }}</h2>
                    <span class="text-xs font-mono uppercase tracking-widest text-(--dialog-skill-color-light) dark:text-(--dialog-skill-color-dark)">{{ metadata.type }}</span>
                </div>
            </div>
            <button @click="closeModal" class="p-2 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>

        <div class="p-8 space-y-8">
            <section v-if="metadata.description">
                <h4 class="text-sm font-semibold text-slate-500 uppercase mb-3 flex items-center gap-2">
                    <span class="w-1 h-4 rounded-full bg-(--dialog-skill-color-light) dark:bg-(--dialog-skill-color-dark)"></span>
                    {{ $t('skills.detail.description') }}
                </h4>
                <p v-if="metadata.description" class="text-slate-700 dark:text-slate-300 leading-relaxed text-classic-m1 text-justify">{{ metadata.description }}</p>
            </section>
            <section v-if="metadata.experience">
                <h4 class="text-sm font-semibold text-slate-500 uppercase mb-3 flex items-center gap-2">
                    <span class="w-1 h-4 rounded-full bg-(--dialog-skill-color-light) dark:bg-(--dialog-skill-color-dark)"></span>
                    {{ $t('skills.detail.xp') }}
                </h4>
                <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-classic-m1 text-justify">{{ metadata.experience }}</p>
            </section>
        </div>
    </dialog>

    <div @click="openModal" class="group flex flex-row bg-card rounded-[10px] p-2.5 gap-2.5 items-center" :class="{
        'border border-solid border-transparent hover:border-color-border hover:cursor-pointer': enabledDetail }">
        <div class="transition-transform duration-10" :class="{'group-hover:scale-108': enabledDetail }">
            <Icon :id="id" ref="iconRef" size="32" />
        </div>
        <h3 class="text-classic-p1 w-full font-normal">{{ metadata.name || "Chargement..." }}</h3>
    </div>
</template>
