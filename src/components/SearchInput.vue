<template>
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
</template>

<script setup>
import { ref } from 'vue';

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
