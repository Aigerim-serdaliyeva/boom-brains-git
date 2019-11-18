<template>
    <FormAuth @submitForm="submitForm" :title="$t('form.login')">
        <template v-slot:indicator v-if="spinnerSettings.loading">
            <Indicator :spinnerSettings="spinnerSettings" />
        </template>

        <InputForm>
            <input
                class="input"
                v-model.trim="formData.email"
                type="email"
                placeholder="Email"
            />

            <div v-if="submitted && !$v.formData.email.required" class="error">
                {{ $t("error.textRequired") }}
            </div>

            <div v-if="submitted && !$v.formData.email.maxLength" class="error">
                {{ $t("error.textMax64") }}
            </div>
        </InputForm>

        <InputForm>
            <input
                class="input"
                v-model="formData.password"
                type="password"
                placeholder="Password"
            />

            <div
                v-if="submitted && !$v.formData.password.required"
                class="error"
            >
                {{ $t("error.textRequired") }}
            </div>

            <div
                v-if="submitted && !$v.formData.password.maxLength"
                class="error"
            >
                {{ $t("error.textMax32") }}
            </div>

            <div class="error">
                <div v-if="serverErrors.length">
                    {{ $t("error.textRight") }}
                    <div
                        v-for="item in filterServerErrors"
                        :key="item.statusCode"
                    >
                        {{ item.ru }}
                    </div>
                </div>
            </div>
        </InputForm>

        <div class="login__links">
            <router-link class="login__link" to="forget"
                >{{ $t("form.forgetPassword") }}</router-link
            >
            <router-link class="login__link" to="registration"
                >{{ $t("form.registration") }}</router-link
            >
        </div>

        <Locale />
        <ButtonForm type="submit" :text="$t('form.logIn')" />
    </FormAuth>
</template>

<script>
import Locale from '../../components/Locale.vue'
import Indicator from "../../components/indicator/Indicator.vue";
import InputForm from "../../components/input-form/InputForm.vue";
import FormAuth from "../../components/form-auth/FormAuth.vue";
import ButtonForm from "../../components/button-form/ButtonForm.vue";
import { mapActions } from "vuex";
import { validateLogin } from "./validation";

export default {
    mixins: [validateLogin],
    components: {
        ButtonForm,
        FormAuth,
        InputForm,
        Indicator, 
        Locale
    },
    data() {
        return {
            submitted: false,
            serverErrors: [],
            formData: {
                email: "",
                password: ""
            },
            spinnerSettings: {
                spinnerColor: "#bada55",
                loading: false,
                size: 20
            }
        };
    },
    computed: {
        filterServerErrors() {
            let arr = this.serverErrors.slice();
            if (!arr.length) {
                return arr;
            }

            arr = arr.map(item => {
                switch (item.statusCode) {
                    case 9:
                        return {};
                    default:
                        return item;
                }
            });

            return arr;
        }
    },
    methods: {
        ...mapActions({
            login: "auth/login"
        }),
        async attemptLogin() {
            try {
                this.spinnerSettings.loading = true;

                const data = await this.login(this.formData);

                if (!data) {
                    return (this.serverErrors = []);
                }

                this.serverErrors = data.errors;
            } catch (err) {
                throw err;
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
            return this.attemptLogin();
        }
    }
};
</script>

<style lang="scss">

</style>
