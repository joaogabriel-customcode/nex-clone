<script setup lang="ts">
import PasswordField from '@/components/PasswordField.vue';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import z from 'zod'

const schema = z.object({
    email : z.string().email(),
    password : z.string().min(10, 'required'),
    repeat :  z.string().min(10, 'required'),
    confirm : z.boolean().default(false).refine((check)=> check === true, {message : "Aceite os termos"})
})

const { values, defineField, errors } = useForm({
    validationSchema : toTypedSchema(schema) 
})
const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [repeat, repeatAttrs] = defineField('repeat')
const [confirm, confirmAttrs , ] = defineField('confirm')

function call(e : Event) { 
     console.log(e)
}


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
                    <pre>{{ errors }}</pre>
                    <pre>{{ values }}</pre>
                    <div class="mb-8"></div>
                    <form @submit.prevent="submit" class="d-flex flex-column align-center w-100 ga-2">
                        <v-text-field error-messages="" v-model="email" class="w-50 rounded" label="Email"></v-text-field>
                        <password-field v-model="password" label="Senha" />
                        <password-field v-model="repeat" label="Confirmar senha" />
                        <v-checkbox  class="w-50" label="Ao confirmar o cadastro, você consente conforme a LGPD (Lei
                        13.709/2018) para o tratamento seguro de seus dados." v-model="confirm"
                            ></v-checkbox>
                        <v-btn type="submit" round color="primary" class="w-50 py-7 d-flex align-center " dark>criar conta</v-btn>
                        <p class="mt-2 text-subtitle-1">Já possui conta? <RouterLink to="/" class="text-primary no-underline">
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
