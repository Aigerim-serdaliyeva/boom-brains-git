<template>
    <FormAuth @submitForm="submitForm">
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
                Поле обязательно к заполнению
            </div>

            <div v-if="submitted && !$v.formData.email.maxLength" class="error">
                Максимальное количество символов не должно превышать 64
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
                Поле обязательно к заполнению
            </div>

            <div
                v-if="submitted && !$v.formData.password.maxLength"
                class="error"
            >
                Максимальное количество символов не должно превышать 32
            </div>

            <div class="error">
                <div v-if="serverErrors.length">
                    Проверьте пожалуйста правильность:
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
import Indicator from "../../components/indicator/Indicator.vue";
import SocialIcons from "../../components/social-icons/SocialIcons.vue";
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
        SocialIcons,
        InputForm,
        Indicator
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
.login {
    &__links {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
        color: #b4b4b4;
        font-size: 14px;
        &--min {
            padding: 0 25px;
        }
    }
    &__link {
        color: #b4b4b4;
        text-decoration: underline;
        font-size: 14px;
        font-weight: normal;
    }
}

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
