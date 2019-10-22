<template>
    <div class="sub-page">
        <router-link :to="backLink" class="back-link"
            ><img src="@/assets/img/return-link.png" alt=""
        /></router-link>
        <h2 class="sub-page__title">{{ title }}</h2>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        backLink: {
            type: String,
            default: "/profile"
        }
    }
};
</script>

<style lang="scss">
.back-link {
    position: absolute;
    top: 0;
    left: 0;
}
.sub-page {
    max-width: 1015px;
    // min-height: 655px;
    padding: 20px 40px 40px;
    background: #f1f1f1;
    border-radius: 6px;
    position: relative;

    &__title {
        text-align: center;
        font-weight: 500;
        font-size: 24px;
        color: #888;
        margin-bottom: 20px;
    }
}
</style>
