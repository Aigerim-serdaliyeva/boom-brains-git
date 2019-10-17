<template>
  <div class="flex">
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
  .flex {
    display: flex;
    width: 100%;
  }
</style>