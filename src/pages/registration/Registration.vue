<template>
    <FormAuth @submitForm="submitForm" :title="$t('form.registration')">
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

            <div
                v-if="submitted && !$v.formData.email.isUnique"
                :class="['error', { pending: $v.formData.email.$pending }]"
            >
                Такой email уже используется
            </div>

            <div class="error" v-if="submitted && !$v.formData.email.maxLength">
               {{ $t("error.textMax64") }}
            </div>
        </InputForm>

        <InputForm>
            <input
                class="input"
                v-model="formData.username"
                type="text"
                placeholder="Username"
            />

            <div
                v-if="submitted && !$v.formData.username.required"
                class="error"
            >
                {{ $t("error.textRequired") }}
            </div>

            <div
                v-if="submitted && !$v.formData.username.isUnique"
                :class="['error', { pending: $v.formData.username.$pending }]"
            >
                {{ $t("error.textNikname") }}
            </div>

            <div v-if="submitted && !$v.formData.username.maxLength">
                {{ $t("error.textMax16") }}
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
        </InputForm>

        <InputForm>
            <input
                class="input"
                v-model="formData.confirmPassword"
                type="password"
                placeholder="Сonfirm"
            />

            <div
                v-if="submitted && !$v.formData.confirmPassword.sameAsPassword"
                class="error"
            >
                {{ $t("error.textPassword") }}
            </div>
        </InputForm>

        <div class="login__links login__links--min">
            <span>{{ $t("form.account") }}</span>
            <router-link class="login__link" to="/login">{{ $t("form.logIn") }}</router-link>
        </div>

        <Locale />

        <ButtonForm type="submit" :text="$t('form.registration')" />
    </FormAuth>
</template>

<script>
import Locale from '../../components/Locale.vue'
import { mapActions } from "vuex";
import Indicator from "../../components/indicator/Indicator.vue";
import FormAuth from "../../components/form-auth/FormAuth.vue";
import InputForm from "../../components/input-form/InputForm.vue";
import ButtonForm from "../../components/button-form/ButtonForm.vue";
import { validateRegistration } from "./validation";

export default {
    mixins: [validateRegistration],
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
            formData: {
                email: "",
                username: "",
                password: "",
                confirmPassword: ""
            },
            spinnerSettings: {
                spinnerColor: "#bada55",
                loading: false,
                size: 20
            }
        };
    },
    methods: {
        ...mapActions({
            register: "auth/register"
        }),
        async attemptRegister() {
            try {
                this.spinnerSettings.loading = true;
                const { confirmPassword, ...otherData } = this.formData;
                const data = await this.register(otherData);
            } catch (err) {
                throw err;
            } finally {
                this.spinnerSettings.loading = false;
            }
        },
        // валидация vuelidate не возвращает промис , поэтому делаем отдельную проверку
        waitForValidation() {
            return new Promise(resolve => {
                const unwatch = this.$watch(
                    () => !this.$v.$pending,
                    isNotPending => {
                        if (isNotPending) {                            
                            resolve(!this.$v.$invalid);
                        }
                    },
                    { immediate: true }
                );
            });
        },
        async submitForm() {
            this.submitted = true;            

            const isValid = await this.waitForValidation();
            if (isValid) {
                // return чтобы из функции передать throw в error boundry
                return this.attemptRegister();
            }
        }
    }
};
</script>

<style lang="scss">
.error {
    padding-top: 0.5rem;
    font-size: 0.8rem;
    text-align: center;
    color: #f57f6c;
}
.pending {
    display: none;
}
</style>
