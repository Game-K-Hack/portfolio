<template>
    <button @click="toggleLanguage()" :title="$t('switchlang')">
        <Flag :id="$i18n.locale" class="h-7.5 z-10 rounded-[5px]"/>
    </button>
</template>

<script>
    import Flag from './Flag.vue';

    export default {
        components: { Flag },
        methods: {
            toggleLanguage() {
                const locales = this.$i18n.availableLocales;
                const currentIndex = locales.indexOf(this.$i18n.locale);
                const nextIndex = (currentIndex + 1) % locales.length;
                const newLocale = locales[nextIndex];

                this.$i18n.locale = newLocale;
                localStorage.setItem('user-locale', newLocale);
                document.documentElement.setAttribute('lang', newLocale);
            }
        }
    }
</script>
