<template>
  <FormAuth>
    <InputForm name="email" placeholder="Email" type="email" />
    <InputForm name="password" placeholder="Password" type="password" />
    <div class="login__links">
      <router-link class="login__link" to="forget">Забыли пароль?</router-link>
      <router-link class="login__link" to="registration">Регистрация</router-link>
    </div>
    <SocialIcons />
    <ButtonForm text="Войти" />
  </FormAuth>
</template>

<script>
import SocialIcons from '../components/social-icons/SocialIcons.vue'
import InputForm from '../components/input-form/InputForm.vue'
import FormAuth from '../components/form-auth/FormAuth.vue'
import ButtonForm from '../components/button-form/ButtonForm.vue'
export default {
  components: {        
     ButtonForm, FormAuth, SocialIcons,InputForm
  }  
}
</script>

<style lang="scss" scoped>
  .login {
    &__links {
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
    }
    &__link {
      color: #B4B4B4;
      text-decoration: underline;
      font-size: 14px;
      font-weight: normal;
    }
  }
</style>