<template>
  <v-container
    class="d-flex justify-center"
    style="background-color: #38be9233; max-width: 2000px"
  >
    <v-row>
      <v-col
        cols="12"
        class="d-flex justify-center flex-column text-center align-center my-"
        style="flex-basis: inherit"
      >
        <p><strong>Principais recursos</strong></p>

        <h1 class="my-3">Tudo o que você precisa para organizar eventos.</h1>

        <p>
          <strong>
            Nosso sistema de gerenciamento de eventos inclui recursos avançados
            de credenciamento, venda de ingressos, relatórios e muito
            mais.</strong
          >
        </p>
      </v-col>

      <v-container class="justify-between pa-0">
        <v-row class="justify-center">
          <v-col
            xs="12"
            sm="12"
            md="12"
            lg="6"
            class="d-flex justify-center mt-5 flex-column text-xs-center text-md-center text-sm-center text-lg-start"
            style="flex-basis: inherit"
          >
            <h3 class="mt-lg-10">Credenciamento Facial</h3>
            <p class="text-recurse ">
              Credenciamento rápido e seguro com reconhecimento facial.
            </p>

            <h3>Venda de Ingressos</h3>
            <p class="text-recurse">
              Venda de ingressos online com opções de pagamento.
            </p>

            <h3>Relatórios avançados</h3>
            <p class="text-center">Acompanhe todos os dados do seu evento com nossos relatórios.</p>
          </v-col>

          <v-col
            xs="12"
            sm="12"
            md="12"
            lg="6"
            class="d-flex justify-center"
            style="flex-basis: inherit"
          >
            <v-img
              src="../assets/dashboard-image.png"
              class="centered-img"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script></script>

<style scoped>
.text-recurse {
  margin-bottom: 10%;
  text-align: center;
}

h3 {
  color: #38be92;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
}

h1 {
  color: #38be92;
}

p {
  opacity: 70%;
}

.centered-img {
  width: 80%;
  height: 80%;
  margin-top: 70px;
}
</style>
