<template>
    <div>
      <NavBar />
        <v-main>
          <ContainerOne />
          <ConatinerTwo />
        </v-main>
      <FooterBar/>
    </div>
</template>

<script setup>
import ContainerOne from "@/components/homeComponents/ContainerOne.vue"
import ConatinerTwo from "@/components/homeComponents/ConatinerTwo.vue";

</script>
