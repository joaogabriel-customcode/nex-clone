<template>
    <div>
      <ContainerOne />
      <ConatinerTwo />
      <FooterBar/>
    </div>
</template>

<script setup>
import ContainerOne from "@/components/homeComponents/ContainerOne.vue"
import ConatinerTwo from "@/components/homeComponents/ConatinerTwo.vue";

</script>

<route lang="yaml">
  meta :
    layout : home
</route>
