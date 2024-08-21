<script setup lang="ts">
import PasswordField from '@/components/PasswordField.vue';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import z from 'zod'

const schema = z.object({
    email: z.string().email(),
    password: z.string()
        .min(10, { message: "Minimo de 10 letras" })
        .regex(/[A-Z]/, { message: "Deve ter no minimo uma letra maiúscula " })
        .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "A senha deve conter pelo menos um caractere especial" })
        .regex(/\d/, "A senha deve conter pelo menos um dígito"),
    repeat: z.string()
        .min(10, { message: "Minimo de 10 letras" })
        .regex(/[A-Z]/, { message: "Deve ter no minimo uma letra maiúscula " })
        .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "A senha deve conter pelo menos um caractere especial" })
        .regex(/\d/, "A senha deve conter pelo menos um dígito"),
    confirm: z.boolean().default(false).refine((check) => check === true, { message: "Aceite os termos" })
})

const { values, defineField, errors, handleSubmit, handleReset, setErrors } = useForm({
    validationSchema: toTypedSchema(schema)
})
const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [repeat, repeatAttrs] = defineField('repeat')
const [confirm, confirmAttrs] = defineField('confirm')


const submit = handleSubmit(values => {
    if (values.password !== values.repeat) {
        console.log("caiu aqui")
        setErrors({
            repeat: "As senhas não coincidem"
        })
        return
    }
})


</script>

<template>
    <v-app>
        <v-main>
            <div class="wrap ">
                <img src="../assets/LoginPage/nex.png" alt="" class="image">
                <div class="d-flex flex-column justify-center align-center w-50 h-100 position-absolute right-0">
                    <header class="w-50 mb-16 d-flex ga-2">
                        <v-sheet width="40" height="22" color="#38BE92" class="rounded mt-3" />


                        <div>
                            <h2 class="font-weight-medium text-h4 text-start w-100">Cadastre-se</h2>
                            <small class="text-subtitle-2 font-weight-regular text-medium-emphasis">Crie sua conta para
                                acessar.</small>
                        </div>
                    </header>
                    <div class="mb-8"></div>
                    <form @submit.prevent="submit" class="d-flex flex-column align-center w-100 ga-2">
                        <v-text-field v-model="email" class="w-50 rounded" :error-messages="errors.email" :error="false"
                            label="Email"></v-text-field>
                        <password-field v-model="password" label="Senha" :error-field="errors.password" />
                        <password-field v-model="repeat" label="Confirmar senha" :error-field="errors.repeat" />
                        <v-checkbox class="w-50 text-subtitle-2" v-model="confirm" :error-messages="errors.confirm">
                            <template v-slot:label>
                                <p class="text-caption">Ao confirmar o cadastro, você consente conforme a LGPD (Lei
                                    13.709/2018) para o tratamento seguro de seus dados.</p>

                            </template>
                        </v-checkbox>
                        <v-btn type="submit" round color="primary" class="w-50 py-7 d-flex align-center " dark>criar
                            conta</v-btn>
                        <p class="mt-2 text-subtitle-1">Já possui conta? <RouterLink to="/"
                                class="text-primary no-underline">
                                Login</RouterLink>
                        </p>
                    </form>
                </div>
            </div>
        </v-main>
    </v-app>
</template>


<style scoped>
.wrap {
    display: flex;
    align-items: center;
    height: 100dvh;
    background-color: #282A42;
}

.no-underline {
    text-decoration: none;
}

.image {
    width: 100dvh;
    bottom: 0;
    position: absolute;
    left: -30em;
}
</style>
