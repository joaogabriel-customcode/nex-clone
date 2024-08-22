<template>
  <v-main>
    <v-container fluid class="d-flex flex-column pa-0">
      <h1 class="my-5 text-center text-md-start">Eventos de Destaque</h1>
    </v-container>
    
    <v-container fluid class="d-flex flex-column flex-sm-row flex-wrap justify-center pa-0">
      <CardEvent class="my-4 mx-2" />
    </v-container>
  </v-main>
</template>

<script setup>
import CardEvent from "./CardEvent.vue";
</script>

<style scoped>
/* Estilos responsivos */
@media (min-width: 600px) {

  h1 {
    font-size: 1.8rem;
    line-height: 1.3;
    text-align: center;
  }

  .mx-2{
    margin: 0;
  }

  .my-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
}
</style>
