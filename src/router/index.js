import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/projects",
            name: "projects",
            component: () => import("@/views/ProjectsView.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/",
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        if (to.hash) {
            return { el: to.hash, top: 80, behavior: "smooth" };
        }
        return { top: 0 };
    },
});

export default router;
