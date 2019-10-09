<template>
  <Form>    
    <Input name="name" placeholder="Name" />
    <Input name="email" placeholder="Email" type="email" />
    <Input name="password" placeholder="Password" type="password" />
    <Input name="confirm" placeholder="Сonfirm" type="password" />
    <SocialIcons />
    <Button text="Регистрация" />
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

</style>