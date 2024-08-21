<template>
  <router-link to="/">
    <v-card max-width="370" class="rounded-lg card">
      <v-img
        width="369"
        height="160"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        cover
        rounded
        class="mb-2 position-relative rounded-lg"
      ></v-img>

      <v-chip
        color="background2"
        variant="flat"
        class="position-absolute elevation-5"
        style="top: 5px; left: 5px"
      >
        Conferencia
      </v-chip>
      <div class="px-4 mb-2 d-flex" style="font-size: 24px">
        Evento Do paulinho
      </div>

      <v-divider class="mx-4 mb-4"></v-divider>

      <div>
        <div class="px-4 d-flex mb-1 align-center">
          <v-icon size="sm" class="mx-1"> mdi-calendar </v-icon>
          13/06/2024
        </div>

        <div class="px-4 mb-2 d-flex align-center">
          <v-icon size="x-small" class="mx-1"> mdi-map-marker </v-icon>
          Arapuã - Paraná
        </div>
      </div>

      <v-card-actions>
        <v-btn color="primary" block border>
          Ingressos Disponíveis
          <v-icon size="large">mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </router-link>
</template>
<style>
a {
  text-decoration: none;
}

.card:hover {
  filter: brightness(1.05);
}
</style>
