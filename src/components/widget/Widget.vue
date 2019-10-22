<template>
  <div class="widget">
    <h4 class="widget__title">{{title}}</h4>
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
}
</script>

<style lang="scss">
  .widget {    
    position: absolute;
    background: #F1F1F1;
    border-radius: 5px;
    padding: 20px 25px;
    height: 100%;
    border: 2px solid #fff;
    &__title {
      text-align: center;
      font-size: 13px;
      // font-weight: normal;
      font-weight: 500;
      color: #888;
      margin-bottom: 15px;
    }
    &__content {
      &__title {
        font-weight: 300;
        font-size: 13px;
        margin-bottom: 6px;
      }
    }
  }
</style>