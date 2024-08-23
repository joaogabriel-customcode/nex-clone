<template>
  <v-main>
    <h1 class="my-5 text-center text-md-start mx-0 mx-md-8">Eventos de Destaque</h1>

    <v-container
      fluid
      class="d-flex align-center flex-column flex-sm-row flex-wrap"
    >
      <Suspense timeout="0">
        <template #fallback>
          <span>Loading</span>
        </template>
        <EventCarrousel :events="events"/>
      </Suspense>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue';
import useEventParticipantHook from '@/composables/useEventParticipantHook';
import { getCategory } from '@/utils/util';
const { category } = defineProps<{category  : Ref<string> }>()
const { eventParticipantControllerFindAllPublicEvents } = useEventParticipantHook();
const events = ref<any>([]);
const route = useRoute();

const fetchEvents = async (categoryParams : string) => {
  console.log(categoryParams)
  const response = await eventParticipantControllerFindAllPublicEvents("100", "1", undefined, categoryParams);
  events.value = response.data.data;
};
watch(() => route.path, (newPath)=> { 
  fetchEvents(getCategory(route.params.id))
  
})

// Use onMounted to fetch the data
onMounted(async () => {
  await fetchEvents(category.value);
});
</script>

<style scoped>
/* Estilos responsivos */
@media (min-width: 600px) {

  h1 {
    font-size: 1.8rem;
    line-height: 1.3;
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
