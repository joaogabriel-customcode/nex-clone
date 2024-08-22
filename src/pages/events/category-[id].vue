<template>
  <div>
    <SearchEvents />

    <h1>{{ eventId }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { watch, ref } from "vue";
import SearchEvents from "@/components/event-sale/SearchEvents.vue";
import useEventParticipantHook from "@/composables/useEventParticipantHook";
import { getCategory } from "@/utils/util";

const route = useRoute();
const eventId = ref(route.params.id);

const nameCategory = ref('')

watch(
  () => route.path,
  (newPath) => {
    eventId.value = route.params.id;
  }
);

// watch(
//   () => eventId.value,
//   (newValue) => {
//     console.log(newValue)
//   }
// );

const { eventParticipantControllerFindAllPublicEvents } =
  useEventParticipantHook();
const events = ref([]);

const fetchEvents = async () => {
  const response = await eventParticipantControllerFindAllPublicEvents(
    "100",
    "1",
    undefined,
    eventId.value
  );

  if (response && response.data && response.data.data) {
    events.value = response.data.data;
    console.log(categoriesEvents(events.value));
  }
};
fetchEvents();


</script>

<route lang="yaml">
meta:
  layout: home
</route>
