<template>
  <div>
    <BannerFuncionallity />
    <BannerLayoutSystem/>
    <CardsSkillsVue/>
    <OrganizationEventVue/>
    <CreatedFacilityContainerVue />
  </div>
</template>

<script setup>

import BannerFuncionallity from '@/components/event-info/banner-funcionallity.vue';
import bannerLayoutSystem from '@/components/event-info/banner-layout-system.vue';
import CardsSkillsVue from '@/components/event-info/cards-skills.vue';
import OrganizationEventVue from '@/components/event-info/organization-event.vue';
import CreatedFacilityContainerVue from '@/components/event-info/created-facility-container.vue';


</script>
<route lang="yaml">
  meta :
    layout : home
</route>