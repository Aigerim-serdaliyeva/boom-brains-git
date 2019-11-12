<template>
    <FormAuth @submitForm="submitForm" :title="$t('form.forget')">
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
                {{ $t("error.textRequired") }}
            </div>

            <div class="error" v-if="submitted && !$v.formData.email.maxLength">
                {{ $t("error.textMax64") }}
            </div>
            <div class="error">
                <div v-if="serverErrors.length">
                    {{ $t("error.textRight") }}
                    <div v-for="item in serverErrors" :key="item.statusCode">
                        {{ item.message }}
                    </div>
                </div>
            </div>
        </InputForm>

        <div class="login__links">
            <router-link class="login__link" to="login"
                >{{ $t("form.login") }}</router-link
            >
            <router-link class="login__link" to="registration"
                >{{ $t("form.registration") }}</router-link
            >
        </div>

        <Locale />

        <ButtonForm type="submit" :text="$t('form.confirm')" />
    </FormAuth>
</template>

<script>
import Locale from '../../components/Locale.vue'
import axios from "axios";
import { mapActions } from "vuex";
import Indicator from "../../components/indicator/Indicator.vue";
import FormAuth from "../../components/form-auth/FormAuth.vue";
import InputForm from "../../components/input-form/InputForm.vue";
import ButtonForm from "../../components/button-form/ButtonForm.vue";
import { validateForget } from "./validation";

export default {
    mixins: [validateForget],
    components: {
        ButtonForm,
        InputForm,
        FormAuth,
        Indicator, 
        Locale
    },
    data() {
        return {
            submitted: false,
            serverErrors: [],
            formData: {
                email: ""
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

                const res = await axios.post("auth/reset-password", {
                    email: this.formData.email
                });
                const data = await res.data;

                if (data.errors) {
                    this.serverErrors = data.errors;
                } else {
                    this.$router.push("/login");
                }
            } catch (error) {
                throw error;
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

<style lang="scss"></style>
