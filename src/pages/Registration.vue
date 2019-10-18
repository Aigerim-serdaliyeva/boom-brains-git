<template>
    <FormAuth>
        <InputForm name="name" placeholder="Name" />
        <InputForm name="email" placeholder="Email" type="email" />
        <InputForm name="password" placeholder="Password" type="password" />
        <InputForm name="confirm" placeholder="Сonfirm" type="password" />
        <SocialIcons />
        <ButtonForm text="Регистрация" />
    </FormAuth>
</template>

<script>
import FormAuth from "../components/form-auth/FormAuth.vue";
import SocialIcons from "../components/social-icons/SocialIcons.vue";
import InputForm from "../components/input-form/InputForm.vue";
import ButtonForm from "../components/button-form/ButtonForm.vue";
export default {
    components: {
        ButtonForm,
        SocialIcons,
        InputForm,
        FormAuth
    }
};
</script>

<style lang="scss" scoped></style>
