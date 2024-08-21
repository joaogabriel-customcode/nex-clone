<template>
  <v-main>
    <h1 class="mx-5 my-5">Eventos de Destaque</h1>

    <v-container
      fluid
      class="d-flex align-center flex-column flex-sm-row flex-wrap pa-2"
    >
      <v-slide-group>
        <CardEvent />
      </v-slide-group>
    </v-container>
  </v-main>
</template>

<script setup>
import CardEvent from './CardEvent.vue';

</script>
