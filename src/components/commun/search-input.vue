<template>
  <v-text-field
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
    :style="inputStyle"
  ></v-text-field>
</template>

<script setup>
import { ref, computed } from 'vue';

const loaded = ref(false);
const loading = ref(false);

// Define a largura do campo de texto dinamicamente
const inputStyle = computed(() => ({
  maxWidth: '380px',
  width: '100%',
}));

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
  width: 100%;
  max-width: 380px;
}

@media (max-width: 600px) {
  .custom-text-field {
    max-width: 100%;
  }
}
</style>
