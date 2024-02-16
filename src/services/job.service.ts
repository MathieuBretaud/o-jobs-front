import {clientAxios} from "@/services/user.service";

export async function fetchjobs(): Promise<any[]> {
    const response = await clientAxios.get("/api/jobs");
    return response.data;
}
