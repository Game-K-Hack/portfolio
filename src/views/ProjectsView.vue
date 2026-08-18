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

    const COLUMNS = [
        { id: 'i', dot: 'bg-[#a78bfa]' },
        { id: 'b', dot: 'bg-[#00AAFF]' },
        { id: 'p', dot: 'bg-[#FFAE00]' },
        { id: 'd', dot: 'bg-[#6ED45D]' },
    ];

    const items = computed(() =>
        (tm('allprojects.items') || []).map((item) => ({
            status: rt(item.status),
            name: rt(item.name),
            description: item.description ? rt(item.description) : '',
            icons: item.icons ? item.icons.map((i) => rt(i)) : [],
            url: item.url ? rt(item.url) : '',
            image: item.image ? rt(item.image) : '',
            background: item.background ? rt(item.background) : '',
        }))
    );

    const hideBrokenImage = (e) => { e.target.style.display = 'none'; };

    const BACKGROUND_MASK = 'linear-gradient(to left, black 0%, transparent 85%)';

    const itemsOf = (status) => items.value.filter((i) => i.status === status);
</script>

<template>
    <Circle color="#FFFFFF" :size="2000" pos="-200:50%" />
    <Circle color="#00AAFF" :size="2000" pos="900:-10%" />
    <Circle color="#1EFF00" :size="2000" pos="1800:110%" />
    <Circle color="#FFFFFF" :size="2000" pos="105%:50%" />

    <div class="mx-[5%] pt-30 sm:pt-35">
        <RouterLink to="/" class="inline-flex items-center gap-2 text-classic-m1 opacity-60 hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="shrink-0" aria-hidden="true">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m0 0l7-7m-7 7l7 7"/>
            </svg>
            <span>{{ $t('allprojects.back') }}</span>
        </RouterLink>

        <div class="mt-4 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
            <div>
                <h1 class="uppercase text-4xl sm:text-6xl font-thin">{{ $t('allprojects.title') }}</h1>
                <p class="text-classic font-extralight mt-4 max-w-3xl">{{ $t('allprojects.description') }}</p>
            </div>

            <a href="https://github.com/Game-K-Hack?tab=repositories" target="_blank" rel="noopener noreferrer"
                class="flex shrink-0 items-center justify-center gap-3 self-start p-2.5 px-6 border-2 border-dashed text-center text-classic-m1 hover:cursor-pointer hover:border-solid rounded-[2.5rem]">
                <Icon id="github" size="22"/>
                {{ $t('allprojects.github') }}
            </a>
        </div>
    </div>

    <div class="mx-[5%] pt-12 pb-25 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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
                class="relative overflow-hidden flex flex-col gap-2 rounded-3xl bg-background p-4 border border-solid border-transparent"
                :class="item.url ? 'hover:border-color-border hover:cursor-pointer' : ''">

                <img v-if="item.background" :src="item.background" alt="" aria-hidden="true"
                    loading="lazy" decoding="async" @error="hideBrokenImage"
                    class="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-[0.10] dark:opacity-[0.16]"
                    :style="{ maskImage: BACKGROUND_MASK, WebkitMaskImage: BACKGROUND_MASK }" />

                <div class="relative flex flex-row justify-between items-start gap-2">
                    <div class="flex flex-row items-center gap-2.5 min-w-0">
                        <img v-if="item.image" :src="item.image" :alt="item.name"
                            width="40" height="40" loading="lazy" decoding="async" @error="hideBrokenImage"
                            class="w-10 h-10 shrink-0 rounded-lg object-cover bg-transparent" />
                        <h3 class="text-classic font-bold leading-tight">{{ item.name }}</h3>
                    </div>
                    <div v-if="item.icons.length" class="flex flex-row justify-end gap-1.5 shrink-0 pt-0.5">
                        <Icon v-for="i in item.icons" :key="i" :id="i" size="22"/>
                    </div>
                </div>

                <p v-if="item.description" class="relative text-classic-m1 font-extralight leading-snug">
                    {{ item.description }}
                </p>
            </component>
        </section>
    </div>

    <span class="block h-25"></span>
</template>
