<template>
    <div class="form">
        <div class="form__img"><img src="@/assets/img/logo.png" /></div>
        <div class="form__block">
            <h1 class="form__title">Войти на сайт</h1>
            <div class="form__content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__img {
        margin-bottom: 40px;
    }

    &__block {
        background: #ffffff;
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        max-width: 403px;
        width: 100%;
        padding: 40px 55px 55px;
    }

    &__title {
        font-size: 24px;
        font-weight: normal;
        text-align: center;
        color: #292929;
        margin-bottom: 35px;
    }

    &__content {
        max-width: 294px;
        width: 100%;
    }
}
</style>
