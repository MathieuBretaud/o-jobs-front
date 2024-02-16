import {createRouter, createWebHistory} from 'vue-router'
import {useUser} from "@/stores";
import {isAuthenticatedGuard, isNotAuthenticatedGuard, isRoleUser} from "@/shared/guards";
import {initialFetchJobs} from "@/stores/jobStore";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: () => import('@/views/LandingPage.vue')
        },
        {
            path: '/login',
            name: 'login',
            beforeEnter: [isNotAuthenticatedGuard],
            component: () => import('@/views/LoginView.vue')
        },
        {
            path: '/jobs',
            name: 'jobs',
            beforeEnter: [isAuthenticatedGuard, isRoleUser, initialFetchJobs],
            component: () => import('@/views/JobsPage.vue')
        },
        {
            path: '/profil',
            name: 'profil',
            beforeEnter: [isAuthenticatedGuard],
            component: () => import('@/views/Profile.vue')
        },
        {
            path: '/:notfound(.*)*',
            component: () => import('@/views/NotFound.vue')
        }
    ]
})

router.beforeEach(async () => {
    const userStore = useUser();
    if (!userStore.loaded) {
        await userStore.fetchCurrentUser();
    }
})

export default router
