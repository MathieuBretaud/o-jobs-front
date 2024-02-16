import {useUser} from "@/stores";

export function isAuthenticatedGuard() {
    const userStore = useUser();
    if (!userStore.isAuthenticated) {
        return '/login'
    }
}

export function isNotAuthenticatedGuard() {
    const userStore = useUser();
    if (userStore.isAuthenticated) {
        return '/'
    }
}

export function isRoleEmployer() {
    const userStore = useUser();
    if (!userStore.isRoleEmployer) {
        return '/landing'
    }
}

export function isRoleUser() {
    const userStore = useUser();
    if (!userStore.isRoleUser) {
        return '/landing'
    }
}
