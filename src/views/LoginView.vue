<script lang="ts" setup>
import {useForm, useField} from "vee-validate";
import {string, z} from "zod";
import {toTypedSchema} from "@vee-validate/zod";
import {ref} from "vue"
import {useUser} from "@/stores";
import type {LoginForm} from "@/interfaces";
import router from "@/router";

const userStore = useUser();

const data = ref<string | null>(null);

const validationSchema = z.object({
  email: z
      .string({required_error: "Email requis"})
      .email({message: "Email non valide"}),
  password: string({
    required_error: "Mot de passe requis",
  }),
});

const {handleSubmit, isSubmitting, setErrors} = useForm({
  validationSchema: toTypedSchema(validationSchema),
});

const mySubmit = handleSubmit(async (formValues: LoginForm) => {
  // const loged = await login(formValues);
  try {
    await userStore.login(formValues)
    await router.push('/profil')
  } catch (e) {
    setErrors({password: e as string})
  }
  // if (typeof loged === "string") {
  //   data.value = loged;
  //   setTimeout(() => {
  //     data.value = null;
  //   }, 3000);
  // }
});

const {value: emailValue, errorMessage: emailError} = useField("email");
const {value: passwordValue, errorMessage: passwordError} = useField("password");
</script>

<template>
  <v-responsive class="mx-auto" max-width="344">
    <div class="ma-4" style="color: #009688; font-weight: bold">Connexion</div>

    <form @submit.prevent="mySubmit">
      <div class="pa-5" style="display: flex; flex-direction: column; border-radius: 10px">
        <v-text-field v-model="emailValue" class="mb-5" hide-details="auto" label="Email"
                      placeholder="johndoe@gmail.com" type="email" :error-messages="emailError"></v-text-field>

        <v-text-field v-model="passwordValue" label="Mot de passe" type="password"
                      hint="Enter your password to access this website" :error-messages="passwordError"></v-text-field>
      </div>
      <div v-if="data">
        <v-alert :text="data" type="error" variant="tonal"></v-alert>
      </div>
      <div v-if="isSubmitting">En cours
        <v-progress-circular indeterminate></v-progress-circular>
      </div>
      <v-btn type="submit" :disabled="isSubmitting" class="mt-4"> Se connecter</v-btn>
    </form>
  </v-responsive>
</template>


