<template>
    <form class="form" @submit.prevent="submitForm">
        <slot name="indicator" />
        <div class="form__img"><img src="@/assets/img/logo.png" /></div>
        <div class="absolute-handler">            
            <div class="form__block">
                <h1 class="form__title">{{ title }}</h1>
                <div class="form__content">
                    <slot />
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        }
    },
    methods: {
        submitForm() {
            this.$emit("submitForm");
        }
    }
};
</script>

<style lang="scss" scoped>
.absolute-handler {
    position: relative;
}

.form {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    text-align: center;

    &__img {
        margin-bottom: 40px;
    }

    &__block {
        background: #ffffff;
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        max-width: 403px;
        width: 100%;
        margin: 0 auto;
        position: relative;
        z-index: 2;
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
        margin: 0 auto;
        width: 100%;
    }
}

@media screen and (max-width: 1370px) {
    .form {
        &__img {
            margin-bottom: 25px;
        }
        &__title {
            margin-bottom: 25px;
        }
        &__block {
            padding: 25px 40px 40px;
        }
    }
}

    @media screen and (max-width: 1300px) {
        .form {
            height: auto;
            padding: 60px 0;
        }
    }
</style>
