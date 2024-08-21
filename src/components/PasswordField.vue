<script setup lang='ts'>
let show = ref(false)
let { label, errorField } = defineProps<{ label: string, errorField : string | undefined }>()
let model = defineModel()
</script>
<template>
    <v-text-field class="w-50" :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :type="show ? 'text' : 'password'"
        hint="At least 8 characters" :label="label" :name="label" counter v-model="model"  :error-messages="errorField"
        @click:append-inner="show = !show"></v-text-field>
</template>


<style scoped></style>