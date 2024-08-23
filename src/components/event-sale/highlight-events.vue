<template>
  <div>
    <h1 class=" my-5 text-center text-md-start mx-0 mx-md-8">Eventos de Destaque</h1>

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
  </div>
</template>

<script setup lang="ts">
import useEventParticipantHook from '@/composables/useEventParticipantHook';
import { ref, onMounted } from 'vue';
const { eventParticipantControllerGetEventsMoreView } = useEventParticipantHook();
const events = ref<any>([]);

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
