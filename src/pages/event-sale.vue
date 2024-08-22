<template>
  <Suspense>
    <template #default>
      <div>
        <v-navigation-drawer temporary v-model="menuContext.menuState"
          :location="$vuetify.display.mobile ? 'left' : undefined">
          <img class="position-absolute" src="../assets/LoginPage/nex.png" width="30" alt="" style="top: 1em; right: 1em">
          <div class="my-14"></div>
          <v-list>
            <v-list-item title="Início" link to="/" prepend-icon="mdi-home-variant-outline"></v-list-item>
            <v-list-item title="Eventos" prepend-icon="mdi-calendar-blank"></v-list-item>
            <v-list-group value="categories">
              <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" prepend-icon="mdi-tag" title="Categories"></v-list-item>
              </template>
              <v-list-item v-for="category in store.categories" link :to="category.href" :title="category.title"></v-list-item>
            </v-list-group>
          </v-list>
        </v-navigation-drawer>
        <NavBar />
        <v-main>
          <v-img cover src="../assets/capa.gif"> </v-img>
          <SearchEvents />
          <HighlightEvents />
        </v-main>
        <FooterBar />
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>


<script setup lang="ts">
import SearchEvents from '@/components/event-sale/SearchEvents.vue';
import HighlightEvents from '@/components/event-sale/HighlightEvents.vue';
import { useAppStore } from '@/stores/app';
import { useMenuStore } from '@/stores/menu';



const store = useAppStore()
const menuContext = useMenuStore()



</script>

<style></style>
