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

<style lang="scss">
.widget {
    position: absolute;
    background: #f1f1f1;
    border-radius: 5px;
    padding: 15px 20px;
    height: 100%;
    border: 2px solid #fff;
    &__title {
        text-align: center;
        font-size: 13px;
        font-weight: 500;
        color: #888;
        margin-bottom: 10px;
    }
    &__content {
        height: 100%;
        // position: relative;
        &__title {
            font-weight: 300;
            font-size: 13px;
            margin-bottom: 0;
            display: flex;
            justify-content: space-between;
        }
    }
    &__img {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90%;
        transition: all 0.5s ease;
        &:hover,
        &.active {
            transform: scale(1.03, 1.03);
        }
    }
}

@media screen and (max-width: 1370px) {
    .widget {
        padding: 15px 15px 10px;
    }
}

@media screen and (max-width: 1200px) {
    .widget {
        padding: 10px;
        &__title {
            margin-bottom: 10px;
        }
    }
}
</style>
