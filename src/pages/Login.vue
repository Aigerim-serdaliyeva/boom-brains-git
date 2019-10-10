<template>
  <Form>
    <Input name="email" placeholder="Email" type="email" />
    <Input name="password" placeholder="Password" type="password" />
    <div class="login__links">
      <router-link class="login__link" to="forget">Забыли пароль?</router-link>
      <router-link class="login__link" to="registration">Регистрация</router-link>
    </div>
    <SocialIcons />
    <Button text="Войти" />
  </Form>
</template>

<script>
import Form from '../components/Form'
import Input from '../components/Input'
import Button from '../components/Button'
import SocialIcons from '../components/SocialIcons'
export default {
  components: {
    Form,
    Input, 
    Button,
    SocialIcons
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