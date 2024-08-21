<template>
  <v-main>
    <h1 class="mx-5">Eventos de Destaque</h1>

    <v-container
      fluid
      class="d-flex align-center flex-column flex-sm-row flex-wrap pa-0"
    >
      <v-slide-group>
        <v-card class="mx-5 my-4" max-width="380">
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="150"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            cover
            rounded
          ></v-img>

          <v-card-item>
            <v-card-title>Cafe Badilico</v-card-title>

            <v-card-subtitle>
              <span class="me-1">Local Favorite</span>

              <v-icon
                color="error"
                icon="mdi-fire-circle"
                size="small"
              ></v-icon>
            </v-card-subtitle>
          </v-card-item>

          <v-divider class="mx-4 mb-1"></v-divider>

          <v-card-title>Tonight's availability</v-card-title>

          <div class="px-4 mb-2">
            <v-chip-group selected-class="bg-deep-purple-lighten-2">
              <v-chip>5:30PM</v-chip>

              <v-chip>7:30PM</v-chip>

              <v-chip>8:00PM</v-chip>

              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </div>

          <v-card-actions>
            <v-btn
              color="deep-purple-lighten-2"
              text="Reserve"
              block
              border
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-slide-group>
    </v-container>
  </v-main>
</template>
