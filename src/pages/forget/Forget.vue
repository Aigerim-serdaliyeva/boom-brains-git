<template>
    <FormAuth @submitForm="submitForm" title="Восстановление пароля">
        <template v-slot:indicator v-if="spinnerSettings.loading">
            <Indicator :spinnerSettings="spinnerSettings" />
        </template>

        <InputForm>
            <input
              class="input"
              v-model="formData.email"
              type="email"
              placeholder="Email"
            />

            <div v-if="submitted && !$v.formData.email.required" class="error">
                Поле обязательно к заполнению
            </div>

        
            <div
                class="error"
                v-if="submitted && !$v.formData.email.maxLength"                
            >
                Максимальное количество символов не должно превышать 64
            </div>
            <div class="error">                
                <div v-if="serverErrors.length">
                    Проверьте пожалуйста правильность:
                    <div v-for="item in serverErrors" :key="item.statusCode"> {{ item.message }} </div>
                </div>                
            </div>
        </InputForm>

        <div class="login__links">
            <router-link class="login__link" to="login"
                >Войти на сайт</router-link
            >
            <router-link class="login__link" to="registration"
                >Регистрация</router-link
            >
        </div>
        
        <ButtonForm type="submit" text="Подтвердить" />
    </FormAuth>
</template>

<script>
import axios from 'axios';
import { mapActions } from "vuex";
import Indicator from "../../components/indicator/Indicator.vue";
import FormAuth from "../../components/form-auth/FormAuth.vue";
import SocialIcons from "../../components/social-icons/SocialIcons.vue";
import InputForm from "../../components/input-form/InputForm.vue";
import ButtonForm from "../../components/button-form/ButtonForm.vue";
import { validateForget } from "./validation";

export default {
    mixins: [validateForget],
    components: {
        ButtonForm,
        SocialIcons,
        InputForm,
        FormAuth,
        Indicator
    },
     data() {
        return {
            submitted: false,
            serverErrors: [],
            formData: {
                email: "",          
            },
            spinnerSettings: {
                spinnerColor: "#bada55",
                loading: false,
                size: 20
            }
        };
    },
    
    methods: {
        async attemptForget() {
            try {
                this.spinnerSettings.loading = true;

                const res = await axios.post('auth/reset-password', {email: this.formData.email})
                const data = await res.data

                if(data.errors) {
                    this.serverErrors = data.errors
                } else {
                    this.$router.push("/login")
                }
            }
            catch(error) {
                throw error
            } finally {
                this.spinnerSettings.loading = false;
            }
        },
          
        submitForm() {
            this.submitted = true;

            this.$v.$touch();

            if (this.$v.$invalid) {                
                return;
            }
            // return чтобы из функции передать throw в error boundry
            return this.attemptForget();
        }
    }
};
</script>

<style lang="scss">
</style>
