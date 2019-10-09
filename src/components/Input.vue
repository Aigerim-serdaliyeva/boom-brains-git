<template>
  <div class="input">
    <input :type="type" :placeholder="placeholder" :name="name">
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    name: String,
    type: {
      default: "text",
      type: String,
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>