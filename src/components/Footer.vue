<template>
  <v-footer
      color="teal-darken-4 text-center d-flex flex-column"
      absolute inset app height="200" width="auto" class="py-12"
  >
    <div class="d-flex w-50 my-4 justify-space-evenly">
      <v-btn variant="tonal" size="small">Me contacter</v-btn>
      <v-btn variant="tonal" size="small">CGU</v-btn>
      <v-btn variant="tonal" size="small">entions légales</v-btn>
    </div>
    <v-card
        tile
        width="100%"
        color="teal"
        dark
        height="100px"
        class="d-flex align-center justify-center"
    >

      &copy; {{ new Date().getFullYear() }} — <strong>O-Jobs</strong>
    </v-card>
  </v-footer>
</template>

<script lang="ts" setup>
</script>
