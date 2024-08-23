<template>
  <div>
    <v-img cover src="../assets/capa.gif"> </v-img>
    <SearchEvents />
    <HighlightEvents />
  </div>
</template>

<script setup lang="ts">
import SearchEvents from "@/components/event-sale/search-events.vue";
import HighlightEvents from "@/components/event-sale/highlight-events.vue";
</script>
<route lang="yaml">
meta:
  layout: home
</route>

<style></style>
