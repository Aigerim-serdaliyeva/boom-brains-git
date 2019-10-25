<template>
    <FormAuth @submitForm="submitForm">
        <template v-slot:indicator v-if="spinnerSettings.loading">
            <Indicator :spinnerSettings="spinnerSettings" />
        </template>

        <InputForm
            name="email"
            v-model="formData.email"
            placeholder="Email"
            type="email"
            autocomplete="on"
        />
        <InputForm
            name="password"
            v-model="formData.password"
            placeholder="Password"
            type="password"
            autocomplete="on"
        />
        <div class="login__links">
            <router-link class="login__link" to="forget"
                >Забыли пароль?</router-link
            >
            <router-link class="login__link" to="registration"
                >Регистрация</router-link
            >
        </div>
        <SocialIcons />
        <ButtonForm type="submit" text="Войти" />
    </FormAuth>
</template>

<script>
import Indicator from "../components/indicator/Indicator.vue";
import SocialIcons from "../components/social-icons/SocialIcons.vue";
import InputForm from "../components/input-form/InputForm.vue";
import FormAuth from "../components/form-auth/FormAuth.vue";
import ButtonForm from "../components/button-form/ButtonForm.vue";
import { mapActions } from "vuex";

export default {
    data() {
        return {
            formData: {
                email: null,
                password: null
            },
            spinnerSettings: {
                spinnerColor: "#bada55",
                loading: false,
                size: 20
            }
        };
    },
    components: {
        ButtonForm,
        FormAuth,
        SocialIcons,
        InputForm,
        Indicator
    },
    methods: {
        ...mapActions({
            login: "auth/login"
        }),
        async submitForm() {
            try {
                this.spinnerSettings.loading = true;
                await this.login(this.formData);
                this.spinnerSettings.loading = false;
            } catch (err) {
                this.spinnerSettings.loading = false;
                throw err;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.login {
    &__links {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }
    &__link {
        color: #b4b4b4;
        text-decoration: underline;
        font-size: 14px;
        font-weight: normal;
    }
}
</style>
