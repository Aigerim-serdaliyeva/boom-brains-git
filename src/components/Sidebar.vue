<template>
  <aside class="sidebar">
    <div class="sidebar__img"><img src="../assets/img/logo.png" alt=""></div>
    <div class="sidebar__menu">
      <ul>
        <li><router-link to="progress">Ваш прогресс</router-link></li>
        <li><router-link to="groups">Возрастные группы</router-link></li>
        <li><router-link to="records">Рекорды</router-link></li>
        <li><router-link to="applications">Приложения</router-link></li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>

</style>