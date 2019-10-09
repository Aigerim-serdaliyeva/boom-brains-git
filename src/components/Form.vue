<template>
  <div class="form">
    <div class="form__img"><img src="../assets/img/logo.png" ></div>
    <div class="form__block">
      <h1 class="form__title">Войти на сайт</h1>
      <div class="form__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

  .button {
    background: #5ACC02;
    color: #fff;
    font-size: 18px;
    border-radius: 57px;
    position: relative;
    display: inline-block;
    text-decoration: none;
    padding: 12px 15px;
    max-width: 186px;
    width: 100%;
    font-size: 14px;
    line-height: 1;
    text-align: center;
    color: #fff !important;
    white-space: nowrap;
    border: none;
    cursor: pointer;
  }

</style>