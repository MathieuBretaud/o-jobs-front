import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/LoginView.vue'
import {useUser} from "@/stores";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: () => import('../views/LandingPage.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
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
