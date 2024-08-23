<template>
  <v-main>
    <h1 class="mx-5 my-5">Eventos de Destaque</h1>

    <v-container
      fluid
      class="d-flex align-center flex-column flex-sm-row flex-wrap "
    >        
            <EventCarrousel :events="events"/>
            <p>Loading...</p>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CardEvent from './CardEvent.vue'
import useEventParticipantHook from '@/composables/useEventParticipantHook';

const { eventParticipantControllerFindAllPublicEvents, eventParticipantControllerGetEventsMoreView } = useEventParticipantHook();
let events = reactive<any[]>([]);

// Define a component that returns a Promise
const fetchEvents = async () => {
  const response = await eventParticipantControllerGetEventsMoreView();
  events.splice(0, events.length, response.data)  ;
};

// Use onMounted to call the fetchEvents function
onMounted(() => {
  fetchEvents();
});

// Use defineAsyncComponent if you need to import components dynamically
// Example:
// const CardEvent = defineAsyncComponent(() => import('./CardEvent.vue'));

</script>

<style scoped>
/* Estilos responsivos */
@media (min-width: 600px) {

  h1 {
    font-size: 1.8rem;
    line-height: 1.3;
    text-align: center;
  }

  .mx-2{
    margin: 0;
  }

  .my-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
}
</style>
