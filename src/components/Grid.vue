<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {    
  }
}
</script>

<style lang="scss">
  .grid {
    position: relative;
    width: 100%;
    height: 400px;
  }
</style>