<template>
  <v-card min-width="300" max-width="300">
    <v-card-title class="text-wrap">
      <v-img class="align-end text-white" height="200" :src="job.picture_url" cover>
        <p class="text-center">{{ job.name }}</p>
      </v-img>
    </v-card-title>
    <v-card-text>
      <p>{{ job.description}}</p>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn color="primary">
          Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import {JobInterface} from "@/interfaces";

const route = useRoute();

defineProps<{
  job: JobInterface;
}>();

</script>
