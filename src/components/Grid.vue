<template>
  <div class="grid" :style="{'grid-template-columns': `repeat(${columnCount}, 1fr)`}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    columnCount: {
      type: Number,
      default: 4
    }      
  }
}
</script>

<style lang="scss">
  .grid {
    display: grid;
    grid-gap: 5px;
  }
</style>