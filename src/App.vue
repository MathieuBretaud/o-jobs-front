<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

function logout() {
  console.log('logout done')
}
</script>

<template>

  <v-app>
    <NavBar :is-loggedin="false" @logout="logout"/>
    <v-main>
      <RouterView/>
    </v-main>
    <Footer/>
  </v-app>

</template>

