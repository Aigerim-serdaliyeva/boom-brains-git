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

<style lang="scss" scoped>
  .widget {    
    background: #F1F1F1;
    border-radius: 5px;
    padding: 15px;
    height: 100%;
  }
</style>