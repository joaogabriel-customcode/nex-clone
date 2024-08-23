<template>
  <div>
    <SearchEvents />
    <CategoryEvents :category="nameCategory" />

  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { watch, ref } from "vue";
import SearchEvents from "@/components/event-sale/search-events.vue";
import useEventParticipantHook from "@/composables/useEventParticipantHook";
import { getCategory } from "@/utils/get-category";

const route = useRoute();
const eventId = ref(route.params.id);

const nameCategory = ref(getCategory(route.params.id))

watch(
  () => route.path,
  (newPath) => {
    eventId.value = route.params.id;
    nameCategory.value = getCategory(eventId.value)
  }
);

const { eventParticipantControllerFindAllPublicEvents } = useEventParticipantHook();
</script>

<route lang="yaml">
meta:
  layout: home
</route>
