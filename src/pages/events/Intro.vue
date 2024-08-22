<template>
  <div>
    <BannerFuncionallityVue />
    <BannerLayoutSystemVue/>
    <CardsSkillsVue/>
    <OrganizationEventVue/>
    <CreatedFacilityContainerVue />
  </div>
</template>

<script lang="ts" setup>

import BannerFuncionallityVue from '@/components/BannerFuncionallity.vue';
import BannerLayoutSystemVue from '@/components/BannerLayoutSystem.vue';
import CardsSkillsVue from '@/components/CardsSkills.vue';
import OrganizationEventVue from '@/components/OrganizationEvent.vue';
import CreatedFacilityContainerVue from '@/components/CreatedFacilityContainer.vue';


</script>
<route lang="yaml">
  meta :
    layout : home
</route>