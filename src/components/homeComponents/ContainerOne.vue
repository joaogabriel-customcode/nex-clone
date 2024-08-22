<template>
  <v-container fluid style="background-image: url(../../assets/bg-home.svg)">
    <v-container fluid class="d-flex flex-column mx-4 container-absolute">
      <div class="mb-8">
        <h1>Só os melhores eventos para você na nossa plataforma</h1>
      </div>

      <SearchInput />

      <HighlightEvents class="my-5" />

      <div class="d-flex justify-center my-2 align-center">
        <v-btn
          style="
            background-color: #38be92;
            color: #fff;
            font-weight: bold;
            width: 200px;
          "
        >
          Ver mais Eventos
        <v-icon size="large" >mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-container>
</template>

<script setup>
import SearchInput from "../SearchInput.vue";
import HighlightEvents from "../event-sale/HighlightEvents.vue";
</script>

<style scoped>
h1 {
  width: 420px;
  font-size: 3.1rem;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 500;
  word-spacing: 5px;
  text-align: start;
}

.img-bg {
  position: absolute;
  top: 0;
}

.container-absolute {
  position: relative;
  top: 0;
}
</style>
