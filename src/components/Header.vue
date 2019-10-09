<template>
  <header class="header">
    <div class="header__content">      
      <User />
      <a href="#">Выход</a>
    </div>
  </header>
</template>

<script>
import User from './User'
export default {
  components: {
    User
  }
}
</script>

<style lang="scss" scoped>

</style>