<script setup>
    import Navbar from "./components/Navbar.vue";
    import ThemeSwitcher from "./components/ThemeSwitcher.vue";
    import LangSwitcher from "./components/LangSwitcher.vue";

    fetch("/metrics").then()
</script>

<template>
    <Navbar
        :ids="['projects', 'xpp', 'skills', 'studies', 'contactme']"
        :pages="[{ id: 'allprojects', label: 'allprojects.nav', to: '/projects' }]"></Navbar>

    <LangSwitcher class="fixed hidden min-[831px]:block top-5 right-10 z-10 opacity-75 hover:opacity-100"/>

    <RouterView />

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
