<script setup lang="ts">
    import Circle from "./components/Circle.vue";
    import Header from "./components/Header.vue";
    import Navbar from "./components/Navbar.vue";
    import Section from '@/components/Section.vue';
    import SubSection from "./components/SubSection.vue";

    import { SKILLS } from '@/data/skills';

    import { defineAsyncComponent } from 'vue';

    const ProjectCard = defineAsyncComponent(() => import('./components/ProjectCard.vue'));
    const BannerCard = defineAsyncComponent(() => import('./components/BannerCard.vue'));
    const Skill = defineAsyncComponent(() => import('./components/Skill.vue'));

    import { useHead } from '@unhead/vue';
    import { useI18n } from 'vue-i18n';
    import Contact from "./components/Contact.vue";
    import ThemeSwitcher from "./components/ThemeSwitcher.vue";
    import Icon from "./components/Icon.vue";
    import LangSwitcher from "./components/LangSwitcher.vue";

    const { t } = useI18n();

    useHead({
        title: () => t('name') + ' | ' + t('job_title'), 
        meta: [
            {
                name: 'description',
                content: () => t('meta_description'),
            },{
                property: 'og:title',
                content: () => t('name') + ' | Portfolio',
            }
        ],
    });

    const formatBold = (text) => {
        if (!text) return '';
        return text.replace(/\[b\](.*?)\[\/b\]/g, '<b class="font-light">$1</b>');
    };
</script>

<template>
    <Circle color="#FFFFFF" :size="2000" pos="-200:50%" />
    <Circle color="#FFAE00" :size="2000" pos="800:0%" />
    <Circle color="#1EFF00" :size="2000" pos="2000:120%" />
    <Circle color="#00AAFF" :size="2000" pos="3400:-10%" />
    <Circle color="#FF0004" :size="2000" pos="4600:102%" />
    <Circle color="#1EFF00" :size="2000" pos="6000:-30%" />
    <Circle color="#FFAE00" :size="2000" pos="7400:100%" />
    <Circle color="#00AAFF" :size="2000" pos="8600:-10%" />
    <Circle color="#FF0004" :size="2000" pos="10000:102%" />
    <Circle color="#1EFF00" :size="2000" pos="11400:-30%" />
    <Circle color="#FFFFFF" :size="2000" pos="105%:50%" />

    <Navbar :ids="['projects', 'xpp', 'skills', 'studies', 'contactme']"></Navbar>

    <LangSwitcher class="fixed hidden min-[831px]:block top-5 right-10 z-10 opacity-75 hover:opacity-100"/>

    <Header avatar="./avatar.webp" :title="$t('name')" :resume="$t('description')"></Header>

    <Section id="projects">
        <div class="mx-[2%] flex flex-row flex-wrap pt-5 gap-12 justify-around mb-25">
            <ProjectCard id="realprice" :icons="['android', 'kotlin']" :links="[
                { url: 'https://github.com/MathieuMarthy/RealPrice', icon: './images/githublink.webp' },
                { url: 'https://play.google.com/store/apps/details?id=com.app.realprice', icon: './images/googleplay.webp' }
            ]"></ProjectCard>
            <ProjectCard id="i20" :icons="['windowsembedded7', 'cpp']"></ProjectCard>
            <ProjectCard id="bkcrackgui" :icons="['qt', 'python']" :links="[
                { url: 'https://github.com/Game-K-Hack/bkcrack-gui', icon: './images/githublink.webp' }
            ]"></ProjectCard>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Game-K-Hack?tab=repositories" 
                class="flex items-center justify-center p-2.5 px-10 border-2 border-dashed text-center text-classic hover:cursor-pointer hover:border-solid rounded-[2.5rem] sm:w-150 md:w-150 lg:w-117.5 2xl:w-125">
                Voir plus
            </a>
        </div>
    </Section>

    <Section id="xpp">
        <div class="grid grid-cols-[min-content_auto] lg:grid-cols-[min-content_min-content_auto] mx-[5%] pt-12.5">
            <template v-for="(i, index) in $tm('xpp.items')" :key="index">
                
                <div class="hidden lg:flex flex-col flex-nowrap w-auto col-start-1">
                    <p class="text-end whitespace-nowrap w-full font-light text-classic">{{ i.date }}</p>
                    <p class="text-end whitespace-nowrap w-full font-light text-classic">
                        <a :href="i.company.url" target="_blank">
                            <u><b>{{ i.company.name }}</b></u>
                        </a> ({{ i.company.location }})
                    </p>

                    <div class="hidden lg:flex flex-row flex-nowrap gap-2.5 mt-2 mb-2 lg:justify-end">
                        <Icon :id="iconKey" v-for="iconKey in i.icons" :key="iconKey" class="w-7.5 h-7.5" size="30"/>
                    </div>
                </div>

                <div class="hidden sm:block w-5 mx-2.5 mt-1.5 col-start-1 lg:col-start-2">
                    <div class="w-5 h-5 rounded-full bg-timeline-point"></div>
                    <div class="w-1 h-[calc(100%-20px-8px)] my-2 mx-auto bg-timeline-rod"></div>
                </div>

                <div class="w-full pb-20 col-start-2 mt-1 lg:col-start-3 lg:mt-0.5 xl:mt-0 2xl:-mt-1">
                    
                    <div class="flex lg:hidden flex-row flex-wrap gap-x-5 mb-2 items-center">
                        <span class="text-classic font-light whitespace-nowrap">{{ i.date }}</span>
                        <span class="text-classic font-light">
                            <a :href="i.company.url">
                                <u><b>{{ i.company.name }}</b></u>
                            </a> 
                            <span class="ml-1">({{ i.company.location }})</span>
                        </span>
                    </div>

                    <div class="flex lg:hidden flex-row flex-wrap gap-2.5 lg:justify-start">
                        <Icon :id="iconKey" v-for="iconKey in i.icons" :key="iconKey" class="w-7.5 h-7.5" size="30"/>
                    </div>

                    <h3 class="text-classic-p1 font-bold leading-tight">{{ i.type }}: {{ i.name }}</h3>

                    <p class="font-extralight text-justify whitespace-pre-line text-classic" v-html="formatBold(i.description)"></p>

                    <div class="block sm:hidden w-full mx-2.5 pt-10">
                        <div class="h-1 w-[80%] my-2 mx-auto bg-timeline-rod"></div>
                    </div>
                </div>
            </template>

            <div class="hidden sm:block w-5 h-1 bg-timeline-rod col-start-1 lg:col-start-2 mx-auto mb-25"></div>
        </div>
    </Section>

    <Section id="skills">
        <div v-for="category in SKILLS" :key="category.id" class="mx-0 sm:mx-[5%] pt-5 pb-25">
            <h3 class="text-classic-p1 font-medium">{{ $t(`skills.${category.id}`) }}</h3>
            <div class="flex flex-col gap-6 pt-8">
                <div v-if="!Array.isArray(category.items[0])" class="flex flex-row flex-wrap px-0 sm:px-8 lg:px-20 gap-6">
                    <Skill v-for="skillId in category.items" :key="skillId?.toString()" :id="skillId?.toString()" :enabledDetail="true" />
                </div>
                <template v-else>
                    <div v-for="(subGroup, idx) in category.items" :key="idx" 
                        class="flex flex-row flex-wrap px-0 sm:px-8 lg:px-20 gap-6">
                        <Skill v-for="skillId in subGroup" :key="skillId" :id="skillId" :enabledDetail="true" />
                    </div>
                </template>
            </div>
        </div>
    </Section>

    <Section id="studies">
        <div class="grid grid-cols-[min-content_min-content_auto] mx-[5%] pt-12.5">
            <template v-for="(i, index) in $tm('studies.items')" :key="index">
                
                <div class="hidden lg:flex flex-col flex-nowrap w-auto col-start-1">
                    <p class="text-end whitespace-nowrap w-full font-light text-classic">{{ i.date }}</p>
                </div>

                <div class="w-5 mx-2.5 mt-1.5 col-start-2">
                    <div class="w-5 h-5 rounded-full bg-timeline-point"></div>
                    <div class="w-1 h-[calc(100%-24px-4px)] my-2 mx-auto bg-timeline-rod"></div>
                </div>

                <div class="w-full col-start-3 font-extralight text-classic mt-2 lg:mt-0.5 xl:mt-0 2xl:-mt-1">
                    
                    <p class="lg:hidden text-classic-m1 font-medium opacity-70 mb-1 leading-none">
                        {{ i.date }}
                    </p>

                    <h3 class="text-classic-p1 font-bold leading-tight">{{ i.type }}: {{ i.name }}</h3>
                    
                    <p class="text-start mt-2" v-if="i.option" v-html="formatBold(i.option)"></p>
                    
                    <p class="text-start pb-20 mt-1">
                        <a :href="i.school.url" target="_blank">
                            <u><b>{{ i.school.name }}</b></u>
                        </a> ({{ i.school.location }})
                    </p>
                </div>
            </template>

            <div class="w-5 h-1 bg-timeline-rod col-start-2 mx-auto mb-25"></div>
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

    <Section id="contactme">
        <div class="mx-[7.5%] pt-10 flex flex-col flex-nowrap justify-around gap-5 lg:flex-row lg:gap-2">
            <Contact id="location">
                <p class="opacity-50">Loire-Atlantique (44)</p>
            </Contact>
            <Contact id="email">
                <a class="opacity-50 hover:text-blue-500 hover:opacity-100" href="mailto:maindron.kelian@laposte.net">maindron.kelian@laposte.net</a>
            </Contact>
            <Contact id="followme">
                <div class="pt-1 flex flex-row flex-nowrap justify-around gap-1">

                    <a v-for="([key, url]) in [
                        ['linkedin', 'https://www.linkedin.com/in/kelian-m/'], 
                        ['github', 'https://github.com/Game-K-Hack/'], 
                        ['rss', `/rss/feed-${$i18n.locale}.xml`]
                    ]" :key="key" :href="url" target="_blank" rel="noopener noreferrer">
                        <Icon :id="key" class="transition duration-50 ease-in-out hover:scale-120" size="30"/>
                    </a>
                </div>
            </Contact>
        </div>
    </Section>

    <span class="block h-50"></span>

    <ThemeSwitcher class="hidden min-[831px]:block fixed bottom-15 left-10 cursor-pointer"/>
</template>

<style>
    * {
        box-sizing: border-box;
    }
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
