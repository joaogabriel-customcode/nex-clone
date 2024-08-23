<script setup lang="ts">
import { BASE_IMAGE_URL } from '@/appConstants';
import { useDisplay } from 'vuetify';
import { ref, watch, computed, defineProps } from 'vue';
import { id } from 'vuetify/locale';

interface Event {
  id: string;
  title: string;
  slug: string;
  category: string;
  photo?: string;
}

const { smAndDown } = useDisplay();

const isSmall = computed(() => smAndDown.value);

const { events } = defineProps<{events : Array<any>}>();

watch(events, () => {
  console.log(events, 'foi ataualizado')
})

</script>

<template>
  <div class="w-100">
    <div v-if="events.length !== 0" style="margin-bottom: 15%">
      <v-slide-group v-if="!isSmall" show-arrows>
        <v-slide-group-item v-for="event in events" :key="event.id">
          <CardEvent class="mx-2" :slug="event.slug" :id="event.id" :title="event.title" :category="event.category"
            :photo="event.photo" />
        </v-slide-group-item>
      </v-slide-group>

      <v-window v-else class="w-100" continuous>
        <v-window-item class="flex w-100" v-for="event in events" :key="event.id">
          <CardEvent :mobile="isSmall" :key="event.id" :slug="event.slug" :id="event.id" :title="event.title"
            :category="event.category" :photo="event.photo" />
        </v-window-item>
      </v-window>
    </div>
    <div v-else style="margin-bottom: 30%;" class="text-center text-md-start mx-0 mx-md-8">
       <p>Nenhum evento encontrado</p>
    </div>

  </div>

</template>

<style scoped></style>
