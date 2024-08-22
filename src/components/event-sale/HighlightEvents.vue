<template>
  <v-main>
    <h1 class="mx-5 my-5">Eventos de Destaque</h1>

    <v-container
      fluid
      class="d-flex align-center flex-column flex-sm-row flex-wrap pa-2"
    >
      <Suspense>
        <template #default>
          <v-slide-group>
            <CardEvent v-for="event in events" :key="event.id" />
          </v-slide-group>
        </template>
        <template #fallback>
          
        </template>
      </Suspense>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue';
import CardEvent from './CardEvent.vue';
import useEventParticipantHook from '@/composables/useEventParticipantHook';

const { eventParticipantControllerFindAllPublicEvents } = useEventParticipantHook();
const events = ref<any[]>([]);

// Define a component that returns a Promise
const fetchEvents = async () => {
  const response = await eventParticipantControllerFindAllPublicEvents('100', '1');
  events.value = response.data.data;
  console.log(events.value);
};

// Use onMounted to call the fetchEvents function
onMounted(() => {
  fetchEvents();
});

// Use defineAsyncComponent if you need to import components dynamically
// Example:
// const CardEvent = defineAsyncComponent(() => import('./CardEvent.vue'));
</script>
