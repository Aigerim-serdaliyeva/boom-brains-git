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

</style>