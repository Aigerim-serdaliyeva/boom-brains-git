<template>
  <div class="sub-page">
    <router-link :to="backLink"><img src="@/assets/img/return-link.png" alt=""></router-link>
    <h2 class="sub-page__title">{{title}}</h2>
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
}
</script>

<style lang="scss">
  .sub-page {
    max-width: 1015px;
    min-height: 655px;
    background: #F1F1F1;
    border-radius: 6px;
    position: relative;

    &__title {
      text-align: center;      
      font-weight: 500;
      font-size: 24px;
      color: #888;
    }
  }
</style>