<template>
  <v-app-bar
      color="teal-darken-4"
  >
    <v-app-bar-title>
      <v-btn href="/">O-Jobs</v-btn>
    </v-app-bar-title>

    <v-spacer></v-spacer>
    <template v-if="isLoggedin">
      <v-btn href="/profil">Mon profil</v-btn>
      <div @click="emit('logout')">
        <v-btn href="/logout">Déconnexion</v-btn>
      </div>
    </template>
    <template v-else>
      <v-btn href="/login">Connexion</v-btn>
      <v-btn href="/register">Inscription</v-btn>
    </template>

  </v-app-bar>
</template>
<script setup lang="ts">

defineProps<{
  isLoggedin: boolean
}>()

const emit = defineEmits<{
  (e: 'logout'): void
}>()
</script>
