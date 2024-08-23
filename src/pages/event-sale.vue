<template>
      <div>
        <v-main>
          <v-img cover src="../assets/capa.gif"> </v-img>
          <SearchEvents />
          <HighlightEvents />
        </v-main>  
      </div>
</template>


<script setup lang="ts">
import SearchEvents from '@/components/event-sale/SearchEvents.vue';
import HighlightEvents from '@/components/event-sale/HighlightEvents.vue';

</script>
<route lang="yaml">
  meta :
    layout : home
</route>

<style></style>
