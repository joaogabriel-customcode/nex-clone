<template>
  <v-main>
    <h1 class="mx-5 my-5">Eventos de Destaque</h1>

    <v-container
      fluid
      class="d-flex align-center flex-column flex-sm-row flex-wrap"
    >
      <Suspense timeout="0">
        <template #fallback>
          <span>aaaaaA</span>
        </template>
        <EventCarrousel :events="events"/>
      </Suspense>
      <pre>{{ events }}</pre>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import useEventParticipantHook from '@/composables/useEventParticipantHook';
const { category } = defineProps<{category  : Ref<string> }>()
const { eventParticipantControllerFindAllPublicEvents } = useEventParticipantHook();
const events = ref<any>(null);

const fetchEvents = async () => {
  console.log(category)
  const response = await eventParticipantControllerFindAllPublicEvents("100", "1", undefined, category);
  events.value = response.data.data;
};

watch(category, ()=> { 
  console.log(category)
})

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
