<template>
  <v-container
    fluid
    class="d-flex align-center flex-column flex-sm-row"
    style="justify-content: flex-end"
  >
    <v-menu scroll-strategy="close">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="text-none d-none d-sm-flex align-center text-uppercase mx-2"
          style="font-weight: 500; font-size: 14px"
          height="48px"
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

    <v-text-field
      max-width="380px"
      class="custom-text-field mt-4 mt-sm-0"
      :loading="loading"
      append-inner-icon="mdi-magnify"
      density="comfortable"
      label="Pesquise por eventos"
      variant="solo"
      hide-details
      @keyup.enter="onClick"
      single-line
      @click:append-inner="onClick"
    ></v-text-field>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useAppStore } from "@/stores/app";

const store = useAppStore();

const loaded = ref(false);
const loading = ref(false);

const onClick = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    loaded.value = true;
  }, 2000);
};
</script>

<style scoped>
.custom-text-field {
  width: 300px;
}
</style>
