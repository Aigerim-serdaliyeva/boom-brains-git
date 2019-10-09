<template>
  <div class="form">
    <form class="callback-form ajax-form">
      <div class="input">
        <input class="input-value" type="email" placeholder="Email" required="required" id="callback_name" name="name"/>
      </div>
      <div class="input">
        <input class="input-value" type="number" placeholder="Password" data-mask="8(000)000-00-00" required="required" id="callback_phone" name="phone"/>
      </div>
      
      .form

      <div class="form__icons">
        <a href=""><i class="fab fa-vk"></i></a>
        <a href=""><i class="fab fa-facebook-f"></i></a>
        <a href=""><i class="fab fa-google"></i></a>
        <a href=""><i class="fab fa-twitter"></i></a>
        <div class="form__icons__title">Авторизация через соц сети</div>
      </div>

      <div class="input callback-end">
        <button class="button" type="submit">Войти</button>
      </div>
    </form>
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