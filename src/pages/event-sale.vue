<template>
  <div>
    <NavBar />
    <v-main>
      <v-img cover src="../assets/capa.gif"> </v-img>
      <SearchEvents/>
      <HighlightEvents/>

    </v-main>
    <FooterBar />
  </div>
</template>

<script setup>
import SearchEvents from '@/components/event-sale/SearchEvents.vue';
import HighlightEvents from '@/components/event-sale/HighlightEvents.vue';
</script>

<style>

</style>
