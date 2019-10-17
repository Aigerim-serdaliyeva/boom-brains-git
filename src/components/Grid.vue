<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    // columnCount: {
    //   type: Number,
    //   default: 4
    // }      
  }
}
</script>

<style lang="scss">
  .grid {
    // display: grid;
    // grid-gap: 5px;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 500px;
    // height: 500px;
  }
</style>