<template>
  <v-container fluid class="py-10" style="background-color: #38be9233">
    <v-row
      class="d-flex justify-between"
      align="center"
      no-gutters
    >
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center flex-column align-center text-center"
      >
        <h1>Eventos irados para você</h1>
        <p>
          Encontre o evento ideal para participar, só os melhores palestrantes
          você encontra aqui!
        </p>
      </v-col>

      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center flex-column align-center mt-6 mt-md-0"
      >
        <v-btn
          style="background-color: #fff; color: #38be92; font-weight: bold"
        >
          Ver mais Eventos <v-icon size="large">mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
/* Media Query para ajustar espaçamento em telas menores */
@media (max-width: 600px) {
  .v-col {
    margin-top: 16px !important;
  }

  h1 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
