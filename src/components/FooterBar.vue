<template>
  <v-footer class="text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <v-divider></v-divider>

    <div><strong>Nex Event</strong> &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script setup>
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
</script>
