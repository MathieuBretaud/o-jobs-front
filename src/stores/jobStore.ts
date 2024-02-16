import {defineStore} from "pinia";
import {fetchjobs} from "@/services/job.service";
import type {JobInterface} from "@/interfaces";

interface jobState {
    jobs: JobInterface[];
    loaded: boolean;
}
export const usejobs = defineStore('jobs', {
    state: (): jobState => ({
        jobs: [],
        loaded: false
    }),
    actions: {
        async fetchJobs() {
            this.jobs = await fetchjobs();
            this.loaded = true;
        }
    }
})

export async function initialFetchJobs() {
    const jobStore = usejobs();
    if (!jobStore.loaded) {
        await jobStore.fetchJobs();
        jobStore.loaded = true;
    }
}
