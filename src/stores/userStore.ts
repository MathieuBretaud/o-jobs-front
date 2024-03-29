import {defineStore} from 'pinia'
import type {LoginForm, User} from "@/interfaces";
import {fetchCurrentUser, login, logout} from "@/services/user.service";

interface UserState {
    currentUser: User | null,
    loaded: boolean,
}

export const useUser = defineStore('user', {
    state: (): UserState => ({
        currentUser: null,
        loaded: false
    }),
    getters: {
        isAuthenticated(state): boolean | null {
            if (state.currentUser) {
                console.log('current true');
                return true;
            } else if (!state.currentUser && state.loaded) {
                console.log('current false');
                return false;
            } else {
                console.log('current null');
                return null;
            }
        },
        isRoleEmployer(state): boolean {
            if (state.currentUser!.role === 'employer') {
                return true
            } else {
                return false
            }
        },
        isRoleUser(state): boolean {
            if (state.currentUser!.role === 'user') {
                return true
            } else {
                return false
            }
        }
    },
    actions: {
        async login(loginForm: LoginForm) {
                this.currentUser = await login(loginForm);
        },
        async logout() {
            await logout();
            this.currentUser = null;
        },
        async fetchCurrentUser() {
            this.currentUser = await fetchCurrentUser();
            this.loaded = true;
        }
    }
})
