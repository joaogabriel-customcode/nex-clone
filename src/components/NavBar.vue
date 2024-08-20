<template>
  <v-responsive class="border rounded">
    <v-app class="app-container">
      <v-app-bar class="px-5">
        <img src="../assets/logo.png" width="48" height="48" class="logo" />
        <div class="d-flex align-center mx-10 justify-center" style="font-size: 16px;">
          <router-link class="mx-5" to="/">Eventos</router-link>

          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                append-icon="mdi-chevron-down"
                v-bind="props"
                class="text-none d-flex align-center"
                style="font-weight: normal; font-size: 16px"
              >
                Categorias
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <router-link class="mx-5" style="color: #F2AF29;" to="/">Produzir eventos</router-link>
        </div>
        <v-spacer></v-spacer>
        <v-btn style="background-color: #38BE92; color: #000; font-weight: bold;"> Cadastre-se </v-btn>

        <v-btn class="mx-4 custom-outlined" variant="outlined"> Entrar </v-btn>
      </v-app-bar>
    </v-app>
  </v-responsive>
</template>

<script setup>
const items = [
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
];
</script>

<style scoped>
.app-container {
  min-width: 100%;
  max-width: 100%; 
  max-height: 63px;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: underline;
}

.custom-outlined {
  border-color: #38BE92;
  color: #38BE92; /* Cor desejada para a borda */
}
</style>
