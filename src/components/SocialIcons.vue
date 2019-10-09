<template>
  <div class="social-icons">
    <a href="" class="social-link social-link--vk"><font-awesome-icon :icon="['fab', 'vk']" /></a>
    
    <font-awesome-icon :icon="['fab', 'facebook-f']" />
    <a href=""><i class="fab fa-google"></i></a>
    <a href=""><i class="fab fa-twitter"></i></a>
    <div class="social-icons__title">Авторизация через соц сети</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .social-link {
    color: #B4B4B4;
    &--vk {
      :hover {
        color: #597DA3;
      }
    }
  }
</style>