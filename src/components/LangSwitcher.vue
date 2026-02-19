<template>
    <button @click="toggleLanguage()" :title="$t('switchlang')">
        <Flag :id="nextLang()" class="h-7.5 z-10 rounded-[5px]"/>
    </button>
</template>

<script>
    import Flag from './Flag.vue';

    export default {
        components: { Flag },
        methods: {
            nextLang() {
                const locales = this.$i18n.availableLocales;
                const currentIndex = locales.indexOf(this.$i18n.locale);
                const nextIndex = (currentIndex + 1) % locales.length;
                const nextLocale = locales[nextIndex];
                return nextLocale;
            },
            toggleLanguage() {
                const nextLocale = this.nextLang();
                this.$i18n.locale = nextLocale;
                localStorage.setItem('user-locale', nextLocale);
                document.documentElement.setAttribute('lang', nextLocale);
            }
        }
    }
</script>
