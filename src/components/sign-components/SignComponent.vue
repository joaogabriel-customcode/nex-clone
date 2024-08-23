<script setup lang="ts">


const { title, subtitle } = defineProps<{ title: string, subtitle: string  }>()


</script>
<template>
    <v-app class="">
        <v-main>
            <v-container fluid fill-height class="pa-0">
                <v-row class="full-height-row no-padding pa-0 pt-3 pl-3">
                    <v-col v-show="true" class="pa-0" cols="6">
                        <div class="position-absolute image-position">
                            <v-img width="1100" src="../../assets/LoginPage/nex.png" class=" top-0 left-0" />
                        </div>
                    </v-col>
                    <v-col v-show="true" class="pa-0  d-flex justify-center align-center flex-column" cols="6">

                        <header class="w-50 mb-16 d-flex ga-2">
                            <v-sheet width="35" height="18" color="#38BE92" class="rounded mt-3" />
                            <div>
                                <h2 class="font-weight-medium text-h4 text-start w-100">{{ title }}</h2>
                                <small class="text-subtitle-2 font-weight-regular text-medium-emphasis"> {{ subtitle
                                    }}</small>
                            </div>
                        </header>
                        <slot name="form"></slot>
                        <slot name="footer"></slot>

                        
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>


<style scoped>
html,
body,
#app {
    height: 100%;
}

.image-position {
    left: -24em;
    bottom: 0em;
}


.full-height-row {

    height: 100dvh;
}
</style>