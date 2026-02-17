<template>
    <component :is="dynamicIcon" v-if="dynamicIcon" :size="size" />
</template>

<script setup>
    import { shallowRef, watch, defineAsyncComponent } from 'vue';

    const props = defineProps({
        id: { type: String, required: true }, 
        size: { type: [String, Number], default: 24 }
    });

    const dynamicIcon = shallowRef(null);
    const metadata = shallowRef({});

    const loadIcon = async (name) => {
        const fileName = `Icon${name.charAt(0).toUpperCase() + name.slice(1)}`;
        dynamicIcon.value = defineAsyncComponent(() => import(`./icons/${fileName}.vue`));
        try {
            const module = await import(`./icons/${fileName}.vue`);
            metadata.value = module.default.metadata || {};
        } catch (e) {
            console.error("Erreur chargement metadata", e);
        }
    };

    watch(() => props.id, (newId) => { loadIcon(newId); }, { immediate: true });
    defineExpose({ metadata });
</script>
