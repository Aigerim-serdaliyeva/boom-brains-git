<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
        "a b c d"
        "n n f t"
        "n n l t";
  }
</style>