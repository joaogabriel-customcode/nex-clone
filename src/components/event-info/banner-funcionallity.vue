<template>
  <div class="d-flex align-center justify-center my-7">
    <v-img
      src="../../assets/events/banner-dark.svg"
      class="centered-img"
      contain
    ></v-img>
  </div>
</template>

<style scoped>
/* Mobile-first styles */
.centered-img {
  width: 100%;
  height: auto;
  max-height: 50vh; /* Ajuste conforme necessário para dispositivos móveis */
  max-width: 100%;
}

/* Styles for larger screens */
@media (min-width: 600px) {
  .centered-img {
    max-height: 60vh;
    max-width: 85vw;
  }
}

@media (min-width: 960px) {
  .centered-img {
    max-height: 70vh;
    max-width: 85vw;
  }
}

@media (min-width: 1280px) {
  .centered-img {
    max-height: 80vh;
    max-width: 85vw;
  }
}
</style>
