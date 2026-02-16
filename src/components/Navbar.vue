<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s ease;
    }
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }
</style>

<template>
    <nav>
        <div class="hidden min-[831px]:flex flex-row gap-15 p-5 pb-15 justify-center backdrop-blur-md fixed z-10 w-screen top-0 items-start" style="mask:linear-gradient(black, black, transparent);">
            <div @click="scrollToSection(id)" v-for="id in ids" :key="id" class="flex flex-row gap-2 hover:cursor-pointer hover:font-bold">
                <p class="text-classic text-white">{{ $t(`${id}.title`) }}</p>
            </div>
        </div>

        <div @click="openburger = true" class="flex min-[831px]:hidden p-5 pb-10 justify-end fixed top-0 right-0 z-20 hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18M3 12h18M3 19h18"/>
            </svg>
        </div>

        <transition name="fade">
            <div v-if="openburger" class="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8">
                <button @click="openburger = false" class="absolute top-5 right-5 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                </button>

                <div v-for="id in ids" :key="id" @click="scrollToSection(id)" class="text-classic-p2 text-white font-medium hover:text-gray-400 transition-colors">
                    {{ $t(`${id}.title`) }}
                </div>
            </div>
        </transition>
    </nav>
</template>

<script>
    export default {
        props: {
            ids: { type: Array, default: () => [] },
        },
        data() {
            return {
                openburger: false
            }
        },
        watch: {
            openburger(isOpen) {
                if (isOpen) {
                    const y = window.scrollY;
                    document.body.style.position = 'fixed';
                    document.body.style.top = `-${y}px`;
                    document.body.style.width = '100%';
                } else {
                    const body = document.body;
                    const scrollY = body.style.top;
                    body.style.position = '';
                    body.style.top = '';
                    body.style.width = '';
                    window.scrollTo(0, parseInt(scrollY || '0') * -1);
                }
            }
        },
        methods: {
            scrollToSection(id) {
                // 1. On ferme le menu
                this.openburger = false;
                
                // 2. On attend que le menu soit fermé et le scroll libéré
                this.$nextTick(() => {
                    const element = document.getElementById(id);
                    if (element) {
                        // Calculer l'offset si ta navbar est fixe pour ne pas cacher le titre
                        const offset = 80; // Ajuste selon la hauteur de ta navbar
                        const bodyRect = document.body.getBoundingClientRect().top;
                        const elementRect = element.getBoundingClientRect().top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            }
        }
    }
</script>
