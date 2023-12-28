<script setup lang="ts">
import {RouterLink, RouterView, useRouter} from 'vue-router'
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import {useUser} from "@/stores";
import router from "@/router";

const userStore = useUser();

async function logout() {
  await userStore.logout();
  await router.push({name: 'login'});
}
</script>

<template>

  <v-app>
    <NavBar :is-authenticated="userStore.isAuthenticated" @logout="logout"/>
    <v-main>
      <RouterView/>
    </v-main>
    <Footer/>
  </v-app>

</template>

