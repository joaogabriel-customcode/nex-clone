<template>
  <v-responsive class="rounded">
    <v-app class="app-container">
      <v-main>
        <v-app-bar class="px-5 py-3 bg-background elevation-6 ">
        
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click.stop="menuContext.changeMenu()" class="d-flex d-sm-none" block slim size="50"></v-app-bar-nav-icon>
        </template>
        <div class="d-none d-sm-flex align-center image-aliasing">
          <router-link to="/" class=""
          ><img src="../assets/logo.png" width="45" height="45" class="logo"
        /></router-link>
        <div
          class="d-flex align-center mx-5 justify-center text-uppercase "
          style="font-size: 14px; font-weight: 500;"
        >
          <router-link to="/event-sale">
            <v-btn
              class="text-none d-flex align-center text-uppercase"
              style="font-weight: 500;; font-size: 14px"
            >
              Eventos
            </v-btn>
          </router-link>

          <v-menu scroll-strategy="close">
            <template v-slot:activator="{ props }">
              <v-btn
                append-icon="mdi-chevron-down"
                v-bind="props"
                class="text-none d-flex align-center text-uppercase"
                style="font-weight: 500; font-size: 14px"
              >
                Categorias
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in store.categories"
                :key="index"
                :value="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <router-link style="color: #f2af29" to="/events/Intro">
            <v-btn
              class="text-none d-flex align-center text-uppercase"
              style="font-weight: 500; font-size: 14px"
            >
              Produzir eventos
            </v-btn>
          </router-link>
        </div>

        </div>
        <v-spacer></v-spacer>
        <router-link to="/signup">
          <v-btn
          class="text-uppercase"
            style="background-color: #38be92; color: #fff; font-weight: bold; font-size: 14px"
          >
            Cadastre-se
          </v-btn>
        </router-link>

        <router-link to="/signin">
          <v-btn class="mx-4 custom-outlined text-uppercase" style="font-size: 14px" variant="outlined"> Entrar </v-btn>
        </router-link>

      </v-app-bar>
      
    
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import { useAppStore } from "@/stores/app";
import { useMenuStore } from "@/stores/menu";


const store = useAppStore()
const menuContext = useMenuStore()
const menu = ref(false);

</script>

<style scoped>
.app-container {
  min-width: 100%;
  max-width: 100%;
  max-height: 100px;
}

a {
  text-decoration: none;
  color: inherit;
}

.custom-outlined {
  border-color: #38be92;
  color: #38be92; /* Cor desejada para a borda */
}

.image-aliasing { 
  image-rendering: auto;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  image-rendering: -webkit-optimize-contrast;
}
</style>
