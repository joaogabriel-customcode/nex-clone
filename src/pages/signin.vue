<script setup lang="ts">
import PasswordField from '@/components/PasswordField.vue';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import z from 'zod'

const schema = z.object({
    email: z.string().email({message : "Email inválido"}),
    password: z.string()
        .min(10, { message: "Minimo de 10 caracteres" })
        .regex(/[A-Z]/, { message: "Deve ter no minimo uma letra maiúscula " })
        .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "A senha deve conter pelo menos um caractere especial" })
        .regex(/\d/, "A senha deve conter pelo menos um dígito"),
})

const { values, defineField, errors, handleSubmit, handleReset, setErrors } = useForm({
    validationSchema: toTypedSchema(schema)
})
const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')


const submit = handleSubmit(values => {
    
})


</script>

<template>
    <SignComponent title="Bem Vindo!" subtitle="Por favor, insira seus dados para acessar." :schema="schema">
        <template v-slot:form>
            <form @submit.prevent="submit" class="d-flex flex-column align-center w-100 ga-2">
                <v-text-field v-model="email" class="w-50 rounded" :error-messages="errors.email" :error="false"
                    label="Email"></v-text-field>
                <password-field message="Esqueceu a senha ?" link="/signup" v-model="password" label="Senha" :error-field="errors.password"/>
                <v-btn type="submit" round color="primary" class="w-50 py-7 mt-2 d-flex align-center " dark>criar conta</v-btn>
            </form>
        </template>
        <template v-slot:footer>
            <p class="mt-2 text-subtitle-1">Não possui conta? <RouterLink to="/signup" class="text-primary text-decoration-none">Cadastre-se</RouterLink>
            </p>
        </template>
    </SignComponent>
    <div class="my-5"></div>
    <FooterBar/>
</template>


<style scoped></style>
