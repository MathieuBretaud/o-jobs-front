<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import {useUser} from "@/stores";

const userStore = useUser();

// const router = useRouter();

function logout() {
  // await userStore.logout();
  // router.push('/connexion');
  console.log('logout done')
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

