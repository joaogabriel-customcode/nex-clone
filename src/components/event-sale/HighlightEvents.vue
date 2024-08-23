<template>
  <v-main>
    <h1 class="mx-5 my-5">Eventos de Destaque</h1>

    <v-container
      fluid
      class="d-flex align-center flex-column flex-sm-row flex-wrap"
    >
      <Suspense timeout="0">
        <template  #fallback>
          <span>loading</span>
        </template>
        <EventCarrousel :events="events"/>
      </Suspense>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import useEventParticipantHook from '@/composables/useEventParticipantHook';

const { eventParticipantControllerGetEventsMoreView } = useEventParticipantHook();
const events = ref<any>(null);

const fetchEvents = async () => {
  const response = await eventParticipantControllerGetEventsMoreView();
  events.value = response.data;
};

// Use onMounted to fetch the data
onMounted(async () => {
  await fetchEvents();
});
</script>

<style scoped>
/* Estilos responsivos */
@media (min-width: 600px) {

  h1 {
    font-size: 1.8rem;
    line-height: 1.3;
    text-align: center;
  }

  .mx-2 {
    margin: 0;
  }

  .my-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
}
</style>
