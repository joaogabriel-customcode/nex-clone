<template>
  <Suspense>
    <template #default>
      <div>
        
          <v-img cover src="../assets/capa.gif"> </v-img>
          <SearchEvents />
          <HighlightEvents />
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
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
