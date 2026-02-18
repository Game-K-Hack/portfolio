<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 605 604" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[15%]': $options.metadata.rounded}">
        <title :id="uid">{{ $options.metadata.name }}</title>
        <path d="M333.76 235.437q26.081 7.956 34.137 34.138v97.579h77.237v-.101h11.883v-.202h1.108v-165.55q-13.293-43.201-56.292-56.393H56.129Q13.12 158.049-.163 201.3v348.02q13.293 43.201 57.5 54.68h343.288q44.207-11.479 57.5-54.68v-90.73h-90.228v21.852q-8.056 26.182-34.842 33.13h2.316-212.78 2.417q-26.787-6.948-34.843-33.13V269.575q8.056-26.182 34.138-34.138z" :class="themeClasses.c1" />
        <path fill="none" :stroke="themeClasses.c1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.014" d="M125.008 513.572q-26.787-6.948-34.843-33.13V269.575q8.056-26.182 34.138-34.138H333.76q26.081 7.956 34.137 34.138v97.579m90.228-.303v-165.55q-13.293-43.201-56.292-56.393H56.129Q13.12 158.049-.163 201.3v348.02q13.293 43.201 57.5 54.68h343.288q44.207-11.479 57.5-54.68v-90.73m-90.228 0v21.852q-8.056 26.182-34.842 33.13h2.316m-212.78 0h210.464M53.41 604h3.927m343.288 0h3.927" />
        <path d="M605.248 56.392Q591.955 13.192 548.956 0H203.252q-43 13.192-56.292 56.392v88.516h90.228v-20.24q8.056-26.183 34.137-34.138h209.457q26.082 7.955 34.138 34.137v210.867q-8.056 26.182-34.843 33.13h2.417-212.78 2.316q-26.786-6.948-34.842-33.13V235.437H146.96v168.976q13.293 43.2 57.5 54.68h343.288q44.207-11.48 57.5-54.68z" :class="themeClasses.c2" />
        <path fill="none" :stroke="themeClasses.c2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.014" d="M146.96 235.437v168.976q13.293 43.2 57.5 54.68h343.288q44.207-11.48 57.5-54.68V56.393Q591.955 13.191 548.956 0H203.252q-43 13.192-56.292 56.392v88.516m90.228 0v-20.24q8.056-26.183 34.137-34.138h209.457q26.082 7.955 34.138 34.137v210.867q-8.056 26.182-34.843 33.13h2.417m-210.464 0h-2.316m-32.526-133.227v100.097q8.056 26.182 34.842 33.13h208.047M204.46 459.093h-3.927m351.142 0h-3.927" />
        <path d="M458.125 497.258V458.59l-85.092.503z" :class="themeClasses.c3" />
        <path d="M146.96 237.955v36.252l86.1-36.655z" :class="themeClasses.c4" />
        <path fill="none" :stroke="themeClasses.c2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.014" d="m233.06 237.552-86.1 36.655v-36.252z" />
        <path fill="none" :stroke="themeClasses.c1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.014" d="m373.033 459.093 85.092 38.165V458.59z" />
    </svg>
</template>

<script>
    export default {
        props: {
            size: { type: [String, Number], default: 24 }
        },
        metadata: {
            name: "VMware",
            type: "Virtualisation & Cloud",
            description: "Solution de virtualisation de serveurs et d'infrastructure cloud.",
            experience: "",
            rounded: false,
            theme: {
                cp: { light: "#F38B00", dark: "#0097D3" },
                c1: "fill-[#F38B00]",
                c2: "fill-[#0097D3]",
                c3: "fill-[#C96D00]",
                c4: "fill-[#0077A9]"
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>