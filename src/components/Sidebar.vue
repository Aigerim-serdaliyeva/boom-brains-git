<template>
  <aside class="sidebar">
    <div class="sidebar__img"><img src="../assets/img/logo.png" alt=""></div>
    <div class="sidebar__menu">
      <ul>
        <li><router-link class="sidebar__link" to="progress">Ваш прогресс</router-link></li>
        <li><router-link class="sidebar__link" to="groups">Возрастные группы</router-link></li>
        <li><router-link class="sidebar__link" to="applications">Приложения</router-link></li>
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

<style lang="scss">
  .sidebar {
    max-width: 250px;
    width: 100%;
    background: #fff;
    border-radius: 10px;
    padding: 40px 15px;
    text-align: center;

    &__img {
      margin-bottom: 70px;
    }

    &__link {
      color: #888888;
      font-size: 18px;
      font-weight: normal;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    li {      
      list-style: none;
      margin-bottom: 65px;
    }
  }
</style>