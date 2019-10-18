<template>
    <div class="widget">
        <h4 class="widget__title">{{ title }}</h4>
        <div class="widget__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
};
</script>

<style lang="scss" scoped>
.widget {
    background: #f1f1f1;
    border-radius: 5px;
    padding: 20px 25px;
    // height: 100%;
    border: 2px solid #fff;

    &__title {
        text-align: center;
        font-size: 13px;
        font-weight: normal;
        color: #888;
    }
}
</style>
