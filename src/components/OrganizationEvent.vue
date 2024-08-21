<template>
  <v-container
    class="d-flex justify-center"
    style="background-color: #38be9233; max-width: 2000px"
  >
    <v-row>
      <v-col cols="12" class="d-flex justify-center flex-column text-center">
        <p>Principais recursos</p>

        <h1 class="my-3">Tudo o que você precisa para organizar eventos.</h1>

        <p>
          Nosso sistema de gerenciamento de eventos inclui recursos avançados de
          credenciamento, venda de ingressos, relatórios e muito mais.
        </p>
      </v-col>

      <v-row class="d-flex justify-center align">
        <v-col cols="6" class="d-flex justify-center flex-column align-center">
          <h3>Credenciamento Facial</h3>
          <p class="text-recurse">
            Credenciamento rápido e seguro com reconhecimento facial.
          </p>

          <h3>Venda de Ingressos</h3>
          <p class="text-recurse">
            Venda de ingressos online com opções de pagamento.
          </p>

          <h3>Relatórios avançados</h3>
          <p>Acompanhe todos os dados do seu evento com nossos relatórios.</p>
        </v-col>

        <v-col cols="6" class="d-flex justify-center">
          <v-img
            src="../assets/dashboard-image.png"
            class="centered-img"
          ></v-img>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script></script>

<style scoped>
.text-recurse {
  margin-bottom: 10%;
}

h3 {
  color: #38be92;
}

h1 {
  color: #38be92;
}

.centered-img {
  width: 80%;
  height: 80%;
  margin-top: 70px;
}
</style>
