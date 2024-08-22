<template>
  <v-container fluid class="d-flex flex-column pa-0">
    <div class="mb-8 text-center">
      <h1 class="display-1">
        Só os
        <strong style="color: #f2af29">melhores </strong>
        <strong style="color: #38be92">eventos</strong>
        para você na nossa plataforma
      </h1>
    </div>

    <SearchInput />

    <HighlightEvents class="my-3" />

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
        <v-icon size="large">mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
import SearchInput from "../SearchInput.vue";
import HighlightEvents from "../event-sale/HighlightEvents.vue";
</script>

<style scoped>
h1 {
  width: 70vh;
  font-size: 3.1rem;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 500;
  word-spacing: 5px;
  text-align: start;
}

@media (max-width: 768px) {
  h1 {
    width: 100%; /* Ajuste a largura para caber no mobile */
    font-size: 2rem; /* Diminui o tamanho da fonte */
    text-align: center; /* Centraliza o texto */
    word-spacing: normal; /* Ajuste de espaçamento */
  }

  .v-btn {
    width: 100%;
  }

  .mb-8 {
    margin-bottom: 16px !important;
  }

  .my-3 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }

  .my-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }
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
