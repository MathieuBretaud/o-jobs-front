import router from "@/router";
import axios from "axios";

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

export async function login({
                                email,
                                password,
                            }: loginProps): Promise<string | void> {
    try {
        await getCSRF();

        await clientAxios.post("/login", {
            email: email,
            password: password,
        });
        console.log('login passé')
        const response = await clientAxios.get<Promise<Partial<signinProps>>>(
            "/api/user"
        );
        console.log('user', response)

    } catch (err: any) {
        console.log("login catch err", err);
        return err.response.data.message;
    }
}



