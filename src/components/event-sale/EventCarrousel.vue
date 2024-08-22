<script setup lang="ts">
import { BASE_IMAGE_URL } from '@/appConstants';
import { useDisplay } from 'vuetify';
const onBoarding = ref(0)
interface Event {
    id: string,
    title: string,
    slug: string,
    category: string,
    photo?: string
}
const display = useDisplay()
watch(display, () => {
    console.log(display)
})
const isSmall = computed(() => {
    return display.smAndDown
})
const { events } = defineProps<{ events: Event[] }>()
</script>
<template>
    <v-slide-group center-active :class="{'w-100' : isSmall.value }">
        <Suspense>
            <template timeout="0" #fallback>
                <span>Loading...</span>
            </template>
            <template #default>
                <div class=" w-100">
                    <v-slide-group v-if="!isSmall.value" class="">
                        <v-slide-group-item v-for="event in events" :key="event.id">
                        <CardEvent class="mx-2" :slug="event.slug" :id="event.id" :title="event.title" :category="event.category"
                            :photo="event.photo" />
                        </v-slide-group-item>
                    </v-slide-group>
                    <v-window v-else  cycle class="w-100" continuous>
                        <v-window-item class="flex w-100" v-for="event in events" :key="event.id">
                            <CardEvent :key="event.id" :slug="event.slug" :id="event.id" :title="event.title"
                                :category="event.category" :photo="event.photo" />
                        </v-window-item>
                    </v-window>
                </div>

            </template>
        </Suspense>

    </v-slide-group>
</template>


<style scoped></style>