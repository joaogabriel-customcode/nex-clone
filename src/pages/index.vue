<template>
    <div>
      <NavBar />
      <BannerFuncionallityVue />
      <BannerLayoutSystemVue/>
      <CardsSkillsVue/>
      <OrganizationEventVue/>
      <CreatedFacilityContainer />
      <FooterBar/>
    </div>
</template>

<script lang="ts" setup>
import BannerLayoutSystemVue from "@/components/BannerLayoutSystem.vue";
import CardsSkillsVue from "@/components/CardsSkills.vue";
import NavBar from "@/components/NavBar.vue";
import OrganizationEventVue from "@/components/OrganizationEvent.vue";
import BannerFuncionallityVue from "../components/BannerFuncionallity.vue";
import CreatedFacilityContainer from "@/components/CreatedFacilityContainer.vue";
import FooterBar from "@/components/FooterBar.vue";

</script>
