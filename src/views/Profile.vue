<script setup lang="ts">

import {useUser} from "@/stores";

const userStore = useUser();

const user = userStore.currentUser;

</script>

<template>
  <h1>Profile</h1>
  {{ user }}
</template>

<style scoped>

</style>
