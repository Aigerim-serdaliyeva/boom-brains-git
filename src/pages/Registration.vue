<template>
    <FormAuth @submitForm="submitForm" title='Регистрация'>
        <template v-slot:indicator v-if="spinnerSettings.loading">
            <Indicator :spinnerSettings="spinnerSettings" />
        </template>
        
        <InputForm name="email" v-model.trim="$v.formData.email.$model" placeholder="Email" type="email" > 
            <div v-if="showErrors" class="form-error">
                <div v-if="!$v.formData.email.required" class="error"> Поле обязательно к заполнению </div>                        
                <div v-if="emailExists" class="error"> Такой email уже существует </div>
            </div>           
            
        </InputForm>

        <InputForm name="name" v-model="formData.username" placeholder="Username" >
            <div v-if="showErrors" class="form-error">
                <div v-if="!$v.formData.username.required" class="error"> Поле обязательно к заполнению </div>
                <div v-if="usernameExists" class="error"> Такой пользователь уже существует </div>
            </div>
            
        </InputForm>

        <InputForm name="password" v-model="formData.password" placeholder="Password" type="password" >
            <div v-if="showErrors" class="form-error">
                <div v-if="!$v.formData.password.required" class="error"> Поле обязательно к заполнению </div>
            </div>
        </InputForm>

        <InputForm name="confirm" v-model="formData.confirmPassword" placeholder="Сonfirm" type="password" >
            <div v-if="showErrors" class="form-error">
                <div v-if="!$v.formData.confirmPassword.required" class="error"> Поле обязательно к заполнению </div>                
            </div>
        </InputForm>
        
        <SocialIcons />
        <ButtonForm type="submit" text="Регистрация" />            
    </FormAuth>
</template>

<script>
import { mapActions } from 'vuex'
import Indicator from '../components/indicator/Indicator.vue'
import FormAuth from "../components/form-auth/FormAuth.vue";
import SocialIcons from "../components/social-icons/SocialIcons.vue";
import InputForm from "../components/input-form/InputForm.vue";
import ButtonForm from "../components/button-form/ButtonForm.vue";
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
    components: {
        ButtonForm,
        SocialIcons,
        InputForm,
        FormAuth, Indicator
    },
    data() {
        return {      
            showErrors: false,               
            emailExists: false,
            usernameExists: false,
            formData: {                                
                email: null,  
                username: null,
                password: null,
                confirmPassword: null,
            },                        
            spinnerSettings: {
                spinnerColor: "#bada55",
                loading: false,
                size: 20
            }
        }
    },
    validations: {        
        formData: {            
            email: {
                required            
            },
            username: {
                required
            },
            password: { required },
            confirmPassword: { required }
        }
        
    },
    methods: {
        ...mapActions({
            register: "auth/register"
        }),
        async attemptRegister() {
            try {
                this.spinnerSettings.loading = true;

                const { confirmPassword, ...otherData } = this.formData                
                const data = await this.register(otherData);                                
    
                if(data) {                    
                    this.showErrors = true

                    switch(data.statusCode) {
                        case 1:
                            this.emailExists = true
                            this.usernameExists = false
                            break;
                        case 2:
                            this.usernameExists = true
                            this.emailExists = false
                            break;
                    }                    

                    return
                }                         
                
                this.showErrors = false                                                              
            } 
            catch (err) {                                
                throw err;
            }
            finally {                
                this.spinnerSettings.loading = false;       
            }            
        },
        submitForm() {             
            this.$v.$touch()

            if (this.$v.$invalid) {
                this.showErrors = true               
                return
            } 

            // return чтобы из функции передать throw в error boundry
            return this.attemptRegister()
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

</style>
