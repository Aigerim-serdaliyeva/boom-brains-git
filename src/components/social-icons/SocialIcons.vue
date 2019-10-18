<template>
    <div class="social-icons">
        <a href="" class="social-link social-link--vk"
            ><font-awesome-icon :icon="['fab', 'vk']"
        /></a>
        <a href="" class="social-link social-link--facebook"
            ><font-awesome-icon :icon="['fab', 'facebook-f']"
        /></a>
        <a href="" class="social-link social-link--google"
            ><font-awesome-icon :icon="['fab', 'google']"
        /></a>
        <a href="" class="social-link social-link--twitter"
            ><font-awesome-icon :icon="['fab', 'twitter']"
        /></a>
        <div class="social-icons__title">Авторизация через соц сети</div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.social-icons {
    text-align: center;
    margin-bottom: 25px;
    &__title {
        color: #b4b4b4;
    }
}

.social-link {
    color: #b4b4b4;
    margin: 0 10px 8px;
    &--vk {
        :hover {
            color: #597da3;
        }
    }
    &--facebook {
        :hover {
            color: #3b5998;
        }
    }
    &--google {
        :hover {
            color: #ea4335;
        }
    }
    &--twitter {
        :hover {
            color: #00acee;
        }
    }
}
</style>
