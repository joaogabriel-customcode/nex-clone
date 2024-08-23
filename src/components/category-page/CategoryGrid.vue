<template>
  <v-row class="d-flex ">
    <v-col
      xs="12"
      sm="6"
      lg="4"
      class="w-100 d-flex justify-center"
      v-for="event in events"
      :key="event.id"
    >
      <CardEvent
        class="mx-2 w-100"
        :slug="event.slug"
        :id="event.id"
        :title="event.title"
        :category="event.category"
        :photo="event.photo"
      />
    </v-col>
  </v-row>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  events: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
