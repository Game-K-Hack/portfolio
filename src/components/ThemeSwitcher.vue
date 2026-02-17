<template>
    <button @click="toggleTheme()" class="absolute text-white -translate-x-1/4 translate-y-1/4 cursor-pointer" aria-label="Changer le thème">
        <svg id="sun-icon" class="h-7.5 w-7.5 block dark:hidden text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m.386-6.364l1.591 1.591M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
        </svg>

        <svg id="moon-icon" class="h-7.5 w-7.5 hidden dark:block text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
    </button>
</template>

<script>
    export default {
        props: {},
        methods: {
            toggleTheme() {
                this.openburger = false;
                const isDark = document.documentElement.classList.contains('dark');
                if (isDark) {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                    localStorage.theme = 'light';
                } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                    localStorage.theme = 'dark';
                }
            }
        }
    }
</script>
