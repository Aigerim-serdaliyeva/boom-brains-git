<template>
    <FormAuth @submitForm="submitForm" title="Регистрация">
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

            <div
                v-if="submitted && !$v.formData.email.isUnique"
                :class="['error', { pending: $v.formData.email.$pending }]"
            >
                Такой email уже используется
            </div>

            <div
                v-else-if="submitted && !$v.formData.email.maxLength"
                class="error"
            >
                Максимальное количество символов не должно превышать 64
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
                Поле обязательно к заполнению
            </div>

            <div
                v-else-if="submitted && !$v.formData.username.isUnique"
                :class="['error', { pending: $v.formData.username.$pending }]"
            >
                Такой никнейм уже используется
            </div>

            <div
                v-else-if="submitted && !$v.formData.username.maxLength"
                class="error"
            >
                Максимальное количество символов не должно превышать 16
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
                v-else-if="submitted && !$v.formData.password.maxLength"
                class="error"
            >
                Максимальное количество символов не должно превышать 32
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
                Пароли не совпадают
            </div>
        </InputForm>

        <SocialIcons />
        <ButtonForm type="submit" text="Регистрация" />
    </FormAuth>
</template>

<script>
import { mapActions } from "vuex";
import Indicator from "../../components/indicator/Indicator.vue";
import FormAuth from "../../components/form-auth/FormAuth.vue";
import SocialIcons from "../../components/social-icons/SocialIcons.vue";
import InputForm from "../../components/input-form/InputForm.vue";
import ButtonForm from "../../components/button-form/ButtonForm.vue";
import { validateRegistration } from "./validation";

export default {
    mixins: [validateRegistration],
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
        submitForm() {
            this.submitted = true;

            this.$v.$touch();

            if (this.$v.$invalid) {                
                return;
            }

            // return чтобы из функции передать throw в error boundry
            return this.attemptRegister();
        }
    }
};
</script>

<style lang="scss" scoped>
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