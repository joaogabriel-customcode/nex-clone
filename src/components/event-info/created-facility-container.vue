<template>
  <v-container
    class="d-flex justify-center p-10 align-center"
    style="background-color: #38be92; max-width: 2000px"
  >
    <v-row class="w-50">
      <v-col xs="12" sm="12" md="12" lg="6" class="d-flex justify-center flex-column p-10">
        <h1 class="text-xs-center text-md-center text-sm-center text-lg-start">Crie Seus eventos com facilidade</h1>

        <p>Nossos sistema de credenciamento facial e venda de ingressos online torna a organização de eventos muito mais simples e eficiente</p>
      </v-col>
      <v-col xs="12" md="12" lg="6" class="d-flex justify-center flex-column align-center">
        <v-btn style="background-color: #FFF; color: #38be92; font-weight: bold;"> EXPERIMENTE AGORA </v-btn>
      </v-col>

      <v-responsive width="100%"></v-responsive>

    </v-row>
  </v-container>
</template>


<style>
.p-10{
  padding: 40px;
}

@media (min-width: 600px) {
  .v-container {
    padding: 24px; /* Padding for tablets */
  }

  h1 {
    font-size: 2rem; /* Font size for tablets */
    text-align: left;
  }

  p {
    font-size: 1rem; /* Font size for tablets */
    text-align: left;
  }
}
</style>