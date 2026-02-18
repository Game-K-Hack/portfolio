import './assets/main.css';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import { createHead } from '@unhead/vue/client'

const messages = {};
const modules = import.meta.glob('./lang/*.json', { eager: true });
for (const path in modules) {
  const lang = path.match(/\/([^/]+)\.json$/)[1];
  messages[lang] = modules[path].default;
}

const i18nData = {
    legacy: false,
    locale: navigator.language.split('-')[0],
    fallbackLocale: 'en',
    messages
};

const i18n = createI18n(i18nData);
const head = createHead();
const app = createApp(App);
app.use(i18n);
app.use(head);
app.mount('#app');

export function setTheme(newTheme) {
    const root = document.documentElement;
    
    let isDark;
    if (newTheme === 'system') {
        localStorage.removeItem('theme');
        isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
        localStorage.theme = newTheme;
        isDark = (newTheme === 'dark');
    }

    if (isDark) {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }

    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
}

const savedTheme = localStorage.getItem('theme') || 'system';
setTheme(savedTheme);
