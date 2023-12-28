import router from "@/router";
import axios from "axios";
import type {LoginForm, User} from "@/interfaces";

// import { useLocalStorage, useStorage } from "@vueuse/core";

export interface loginProps {
    email: string;
    password: string;
}

export interface signinProps {
    lastname: string;
    firstname: string;
    email: string;
    password: string;
    city: string;
    zipcode: string;
}

export const clientAxios = axios.create({
    baseURL: "http://localhost",
    withCredentials: true,
    withXSRFToken: true,
});

export async function getCSRF(): Promise<void> {
    await clientAxios.get("/sanctum/csrf-cookie");

}

export async function login(loginForm: LoginForm): Promise<User> {
    try {
        await getCSRF();

        await clientAxios.post("/login", loginForm);
        console.log('login passé')
        const response = await clientAxios.get<Promise<User>>(
            "/api/me"
        );
        if (response.status === 200) {
            return await response.data
        } else {
            throw await response.data
        }
    } catch (err: any) {
        // console.log("login catch err", err);
        throw err.response.data.message;
    }
}

export async function fetchCurrentUser(): Promise<User | null> {
    try {
        const response = await clientAxios.get<Promise<User | null>>("/api/me");
        return response.data
    } catch (e) {
        return null
    }

}



