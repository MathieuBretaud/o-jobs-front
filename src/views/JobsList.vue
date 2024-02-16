<script setup lang="ts">
import {ref, watchEffect} from "vue";
import JobCard from "@/components/JobCard.vue";
import {usejobs} from "@/stores/jobStore";

const datas = ref(null)

const jobStore = usejobs();


</script>

<template>
  <v-container>
  <v-row>
    <v-col
        style="display: flex; justify-content: center; align-items: center"
        v-for="(job, i) in jobStore.jobs"
        class="my-4"
        :key="i"
        cols="12"
        md="6"
        lg="4"
        xl="4"
    >
      <JobCard :job="job" />
    </v-col>
  </v-row>
    </v-container>
</template>
