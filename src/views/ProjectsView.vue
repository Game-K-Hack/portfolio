<script setup>
    import { computed } from 'vue';
    import { useHead } from '@unhead/vue';
    import { useI18n } from 'vue-i18n';

    import Circle from '@/components/Circle.vue';
    import Icon from '@/components/Icon.vue';

    const { t, tm, rt } = useI18n();

    useHead({
        title: () => t('allprojects.title') + ' | ' + t('name'),
        meta: [
            {
                name: 'description',
                content: () => t('allprojects.meta_description'),
            },{
                property: 'og:title',
                content: () => t('allprojects.title') + ' | ' + t('name'),
            }
        ],
    });

    /**
     * Colonnes du kanban. L'ordre du tableau est l'ordre d'affichage, `id`
     * correspond à la clé de traduction (`column.<id>`) et au champ `status`
     * des items dans les fichiers de langue.
     */
    const COLUMNS = [
        { id: 'i', dot: 'bg-[#a78bfa]' },
        { id: 'b', dot: 'bg-[#00AAFF]' },
        { id: 'p', dot: 'bg-[#FFAE00]' },
        { id: 'd', dot: 'bg-[#1EFF00]' },
    ];

    const items = computed(() =>
        (tm('allprojects.items') || []).map((item) => ({
            status: rt(item.status),
            name: rt(item.name),
            description: item.description ? rt(item.description) : '',
            icons: item.icons ? item.icons.map((i) => rt(i)) : [],
            url: item.url ? rt(item.url) : '',
        }))
    );

    const itemsOf = (status) => items.value.filter((i) => i.status === status);
</script>

<template>
    <Circle color="#FFFFFF" :size="2000" pos="-200:50%" />
    <Circle color="#00AAFF" :size="2000" pos="900:-10%" />
    <Circle color="#1EFF00" :size="2000" pos="1800:110%" />
    <Circle color="#FFFFFF" :size="2000" pos="105%:50%" />

    <div class="mx-[5%] pt-30 sm:pt-35">
        <RouterLink to="/" class="inline-flex items-center gap-2 text-classic-m1 opacity-60 hover:opacity-100">
            &larr; {{ $t('allprojects.back') }}
        </RouterLink>

        <h1 class="uppercase text-4xl sm:text-6xl font-thin mt-4">{{ $t('allprojects.title') }}</h1>
        <p class="text-classic font-extralight mt-4 max-w-3xl">{{ $t('allprojects.description') }}</p>
    </div>

    <div class="mx-[5%] pt-12 pb-25 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
        <section v-for="column in COLUMNS" :key="column.id"
            class="flex flex-col gap-4 rounded-4xl bg-card p-4 border border-solid border-transparent">

            <header class="flex flex-row items-center gap-2.5 px-2 pt-1">
                <span class="w-3 h-3 rounded-full shrink-0" :class="column.dot"></span>
                <h2 class="text-classic font-bold uppercase leading-tight">{{ $t(`column.${column.id}`) }}</h2>
                <span class="ml-auto text-classic-m1 font-light opacity-60">{{ itemsOf(column.id).length }}</span>
            </header>

            <p v-if="itemsOf(column.id).length === 0" class="px-2 pb-2 text-classic-m1 font-extralight opacity-50">
                {{ $t('allprojects.empty') }}
            </p>

            <component v-for="(item, index) in itemsOf(column.id)" :key="index"
                :is="item.url ? 'a' : 'div'"
                :href="item.url || null"
                :target="item.url ? '_blank' : null"
                :rel="item.url ? 'noopener noreferrer' : null"
                class="flex flex-col gap-2 rounded-3xl bg-background p-4 border border-solid border-transparent"
                :class="item.url ? 'hover:border-color-border hover:cursor-pointer' : ''">

                <div class="flex flex-row justify-between items-start gap-2">
                    <h3 class="text-classic font-bold leading-tight">{{ item.name }}</h3>
                    <div v-if="item.icons.length" class="flex flex-row justify-end gap-1.5 shrink-0 pt-0.5">
                        <Icon v-for="i in item.icons" :key="i" :id="i" size="22"/>
                    </div>
                </div>

                <p v-if="item.description" class="text-classic-m1 font-extralight leading-snug">
                    {{ item.description }}
                </p>
            </component>
        </section>
    </div>

    <div class="mx-[5%] pb-25 flex justify-center">
        <a href="https://github.com/Game-K-Hack?tab=repositories" target="_blank" rel="noopener noreferrer"
            class="flex items-center justify-center gap-3 p-2.5 px-10 border-2 border-dashed text-center text-classic hover:cursor-pointer hover:border-solid rounded-[2.5rem]">
            <Icon id="github" size="26"/>
            {{ $t('allprojects.github') }}
        </a>
    </div>

    <span class="block h-25"></span>
</template>
