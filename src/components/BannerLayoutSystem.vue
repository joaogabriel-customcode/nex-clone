<template>
  <div class="d-flex align-center justify-center m-10 flex-column">
    <v-img
      src="../assets/image1.png"
      class="centered-img d-none d-sm-flex"
    ></v-img>


    <div class="d-flex justify-center my-10">
      <v-btn style="background-color: #38BE92; color: #fff; font-weight: bold; width: 160px;"> Começar </v-btn>
    </div>
  </div>
</template>

<style scoped>
.full-screen {
  width: 100vw; 
}

.centered-img {
  height: 60%; 
  width: 60%; 
  max-height: 70vh;
  max-width: 70vw;
}
</style>
