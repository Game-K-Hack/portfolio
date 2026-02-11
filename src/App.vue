<script setup lang="ts">
    import Circle from "./components/Circle.vue";
    import Header from "./components/Header.vue";
    import ProjectCard from "./components/ProjectCard.vue";
    import Skill from "./components/Skill.vue";
    import Section from '@/components/Section.vue';
    import { SKILLS } from '@/data/skills';
    import { ICONS } from '@/data/icons';
    import SubSection from "./components/SubSection.vue";
    import BannerCard from "./components/BannerCard.vue";
    import Navbar from "./components/Navbar.vue";

    const formatBold = (text) => {
        if (!text) return '';
        return text.replace(/\[b\](.*?)\[\/b\]/g, '<b class="font-light">$1</b>');
    };
</script>

<template>
    <!-- <main class="dashboard-container"> -->
        <Circle color="#FFFFFF" :size="2000" pos="-20%:50%" />
        <Circle color="#FFAE00" :size="2000" pos="800:0%" />
        <Circle color="#1EFF00" :size="2000" pos="1800:120%" />
        <Circle color="#00AAFF" :size="2000" pos="3000:-10%" />
        <Circle color="#FF0004" :size="2000" pos="4200:110%" />
        <Circle color="#1EFF00" :size="2000" pos="5400:-20%" />
        <Circle color="#FFAE00" :size="2000" pos="6600:100%" />
        <Circle color="#FFFFFF" :size="2000" pos="105%:50%" />

        <Navbar :ids="['projects', 'xpp', 'skills', 'studies']"></Navbar>

        <Header avatar="./avatar.png" :title="$t('name')" :resume="$t('description')"></Header>

        <Section id="projects">
            <div class="flex flex-row flex-wrap pt-5 gap-12 justify-evenly mb-25">
                <ProjectCard id="realprice" :icons="['android', 'kotlin']" :links="[
                    { url: 'https://github.com/MathieuMarthy/RealPrice', icon: 'githublink.png' },
                    { url: 'https://play.google.com/store/apps/details?id=com.app.realprice', icon: 'googleplay.png' }
                ]"></ProjectCard>
                <ProjectCard id="i20" :icons="['windowsembedded7', 'cpp']"></ProjectCard>
                <ProjectCard id="bkcrackgui" :icons="['qt', 'python']" :links="[
                    { url: 'https://github.com/Game-K-Hack/bkcrack-gui', icon: 'githublink.png' }
                ]"></ProjectCard>
                <button class="p-2.5 m-auto px-10 border-2 border-dashed rounded-full hover:cursor-pointer hover:border-solid">
                    Voir plus
                </button>
            </div>
        </Section>

        <Section id="xpp">
            <div class="grid grid-cols-[min-content_min-content_auto] mx-[5%] pt-12.5">
                <template v-for="(i, index) in $tm('xpp.items')" :key="index">
                    <div class="flex flex-col flex-nowrapl w-auto col-1">
                        <p class="text-end whitespace-nowrap w-full font-light text-2xl">{{ $t(i.date) }}</p>
                        <p class="text-end whitespace-nowrap w-full font-light text-2xl">
                            <a :href="$t(i.company.url)">
                                <u><b>{{ $t(i.company.name) }}</b></u>
                            </a> ({{ $t(i.company.location) }})
                        </p>
                        <div class="flex flex-row justify-end mt-2.5 gap-2.5">
                            <img class="w-7.5 h-7.5" v-for="iconKey in i.icons" :key="iconKey"
                                                                                :src="'./icons/' + ICONS[iconKey]?.icon"
                                                                                :alt="ICONS[iconKey]?.icon"
                                                                                :class="{ 'rounded-[5px]': ICONS[iconKey]?.rounded }">
                        </div>
                    </div>
                    <div class="w-5 mx-2.5 mt-2 col-2">
                        <div class="w-5 h-5 rounded-full bg-timeline-point"></div>
                        <div class="w-1 h-[calc(100%-24px-4px)] my-2 mx-auto bg-timeline-rod"></div>
                    </div>
                    <div class="w-full col-3">
                        <h1 class="text-3xl font-bold">{{ $t(i.type) }}: {{ $t(i.name) }}</h1>
                        <p class="p-5 font-extralight text-justify text-2xl whitespace-pre-line pb-20" v-html="formatBold($t(i.description))"></p>
                    </div>
                </template>
                <div class="w-5 h-1 bg-timeline-rod col-2 mx-auto mb-25"></div>
            </div>
        </Section>

        <Section id="skills">
            <div v-for="category in SKILLS" :key="category.id" class="mx-[5%] pt-5 pb-25">
                <h1 class="text-3xl font-medium">{{ $t(`skills.${category.id}`) }}</h1>
                <div class="flex flex-col gap-6 pt-8">
                    <div v-if="!Array.isArray(category.items[0])" class="flex flex-row flex-wrap px-8 lg:px-20 gap-6">
                        <Skill v-for="skillId in category.items" :key="skillId?.toString()" :id="skillId?.toString()" />
                    </div>
                    <template v-else>
                        <div v-for="(subGroup, idx) in category.items" :key="idx" 
                            class="flex flex-row flex-wrap px-8 lg:px-20 gap-6">
                            <Skill v-for="skillId in subGroup" :key="skillId" :id="skillId" />
                        </div>
                    </template>
                </div>
            </div>
        </Section>

        <Section id="studies">
            <div class="grid grid-cols-[min-content_min-content_auto] mx-[5%] pt-12.5">
                <template v-for="(i, index) in $tm('studies.items')" :key="index">
                    <div class="flex flex-col flex-nowrapl w-auto col-1">
                        <p class="text-end whitespace-nowrap w-full font-light text-2xl">{{ $t(i.date) }}</p>
                    </div>
                    <div class="w-5 mx-2.5 mt-2 col-2">
                        <div class="w-5 h-5 rounded-full bg-timeline-point"></div>
                        <div class="w-1 h-[calc(100%-24px-4px)] my-2 mx-auto bg-timeline-rod"></div>
                    </div>
                    <div class="w-full col-3 font-extralight text-2xl whitespace-nowrap">
                        <h1 class="text-3xl font-bold">{{ $t(i.type) }}: {{ $t(i.name) }}</h1>
                        <p class="text-start" v-if="i.option" v-html="formatBold($t(i.option))"></p>
                        <p class="text-start pb-20">
                            <a :href="$t(i.school.url)"><u><b>{{ $t(i.school.name) }}</b></u></a> ({{ $t(i.school.location) }})
                        </p>
                    </div>
                </template>
                <div class="w-5 h-1 bg-timeline-rod col-2 mx-auto mb-25"></div>
            </div>
        </Section>

        <SubSection id="certifications">
            <div class="mx-[5%]"></div>
        </SubSection>

        <SubSection id="cyber">
            <div class="mx-[5%] mt-12.5">
                <BannerCard id="tryhackme"></BannerCard>
                <BannerCard id="rootme"></BannerCard>
            </div>
        </SubSection>
    <!-- </main> -->
</template>

<style>
    /* Reset global pour éviter les surprises */
    html,
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        /* Sécurité supplémentaire */
        overflow-x: hidden;
    }

    .content {
        position: relative;
        /* Place ton texte au-dessus des cercles */
        z-index: 1;
    }
</style>
