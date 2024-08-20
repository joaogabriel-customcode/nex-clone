<template>
  <v-row class="d-flex justify-center align-center my-10 no-gutters">
    <v-col cols="12" md="8" class="d-flex justify-center">
      <v-row class="d-flex justify-center align-center" no-gutters>
        <v-col cols="12" sm="4" class="d-flex justify-center mb-4">
          <v-card class="side-card d-flex flex-column align-center p-4">
            <v-card-text class="d-flex justify-center align-center flex-column mb-3">
              <v-icon size="x-large" class="icon">mdi-qrcode-scan</v-icon>
              <v-card-title>CREDENCIAMENTO</v-card-title>
            </v-card-text>
            <v-card-text class="text-center">
              Credenciamento por QrCode e facial, dentro da plataforma sem precisar de equipamentos.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4" class="d-flex justify-center mb-4">
          <v-card class="d-flex flex-column align-center p-4 card-center">
            <v-card-text class="d-flex justify-center align-center flex-column mb-3">
              <v-icon class="icon" size="x-large">mdi-chart-timeline-variant</v-icon>
              <v-card-title>FACILIDADE</v-card-title>
            </v-card-text>
            <v-card-text class="text-center">
              De maneira fácil e intuitiva você cria e escolhe o credenciamento que quiser.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4" class="d-flex justify-center mb-4">
          <v-card class="side-card d-flex flex-column align-center p-4">
            <v-card-text class="d-flex justify-center align-center flex-column mb-3">
              <v-icon size="x-large" class="icon">mdi-lightning-bolt-outline</v-icon>
              <v-card-title>RAPIDEZ</v-card-title>
            </v-card-text>
            <v-card-text class="text-center">
              Resolva tudo que precisa do seu evento em questão de minutos.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
.side-card {
  max-width: 100%;
  margin: 2px;
}

.icon {
  margin-bottom: 8px; 
}

.v-card-text {
  text-align: center; 
}

.mb-4 {
  margin-bottom: 16px; 
}

.v-row {
  flex-wrap: wrap; 
}

.card-center{
  background-color: #38be92;
}
</style>
