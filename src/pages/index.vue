<template>
  <div>
    <v-container fluid>
      <ContainerOne />
      <ConatinerTwo />
    </v-container>
  </div>
</template>

<script setup>
import ContainerOne from "@/components/homeComponents/ContainerOne.vue";
import ConatinerTwo from "@/components/homeComponents/ConatinerTwo.vue";
</script>

<route lang="yaml">
meta:
  layout: home
</route>
