<script setup lang="ts">

defineProps<{
  isAuthenticated: boolean | null
}>()

const emit = defineEmits<{
  (e: 'logout'): void
}>()
// console.log(isAuthenticated)
</script>

<template>
  <v-app-bar
      color="teal-darken-4"
  >
    <v-app-bar-title>
      <v-btn href="/">O-Jobs</v-btn>
    </v-app-bar-title>

    <v-spacer></v-spacer>
    <template v-if="isAuthenticated">
      <v-btn :to="{name: 'jobs'}">Liste Jobs</v-btn>
      <v-btn :to="{name: 'profil'}">Mon profil</v-btn>
      <v-btn @click="emit('logout')">Déconnexion</v-btn>
    </template>
    <template v-else-if="isAuthenticated === false">
      <v-btn href="/login">Connexion</v-btn>
      <v-btn href="/register">Inscription</v-btn>
    </template>

  </v-app-bar>
</template>
