<template>
  <header class="header">
    <div class="header__content">      
      <UserProfile />
      <div class="header__exit">
        <img src="@/assets/img/exit.png" alt="">
        <a href="#">Выход</a>
      </div>
    </div>
  </header>
</template>

<script>
import UserProfile from '../user-profile/UserProfile.vue'

export default {
  components: { UserProfile }
}
</script>

<style lang="scss" scoped>
  .header {
    background-image: url('~@/assets/img/header-back.jpg');
    padding: 22px 30px 22px 40px;

    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__exit {
      text-align: center;
      a {
        display: block;
        color: #ffffff;
        font-weight: normal;
        font-size: 13px;
      }
    }
  }
</style>