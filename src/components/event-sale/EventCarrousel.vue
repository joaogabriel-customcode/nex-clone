<script setup lang="ts">
import { BASE_IMAGE_URL } from '@/appConstants';
import { useDisplay } from 'vuetify';
import { ref, watch, computed } from 'vue';

interface Event {
  id: string;
  title: string;
  slug: string;
  category: string;
  photo?: string;
}

const { smAndDown } = useDisplay();

const isSmall = computed(() => smAndDown.value);

const { events } = defineProps<{ events: Event[] }>();

watch(events, ()=>{
    console.log(events, 'foi ataualizado')
})

</script>

<template>
  <v-slide-group center-active :class="{'w-100': isSmall}">
    <div class="w-100">
      <v-slide-group v-if="!isSmall">
        <v-slide-group-item show-arrows v-for="event in events" :key="event.id">
          <CardEvent class="mx-2" :slug="event.slug" :id="event.id" :title="event.title" :category="event.category" :photo="event.photo" />
        </v-slide-group-item>
      </v-slide-group>

      <v-window v-else class="w-100">
        <v-window-item class="flex w-100" v-for="event in events" :key="event.id">
          <CardEvent :mobile="isSmall" :key="event.id" :slug="event.slug" :id="event.id" :title="event.title" :category="event.category" :photo="event.photo" />
        </v-window-item>
      </v-window>
    </div>
  </v-slide-group>
</template>

<style scoped></style>
