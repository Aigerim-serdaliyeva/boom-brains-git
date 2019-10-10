<template>
  <div class="user">
    <div class="user__img"><img src="../assets/img/Group 108.jpg" alt=""></div>
    <div class="user__content">
      <div class="user__name">Player Name <img src="../assets/img/pen.png" alt=""></div>
      <div class="user__data"><span>Email:</span> wtf@hz.com</div>
      <div class="user__data"><span>id:</span> 3646167</div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .user {
    color: #fff;
    display: flex;
    align-items: flex-end;

    &__img {
      width: 152px;
      height: 152px;
      border-radius: 50%;
      border: 5px solid #fff;
      overflow: hidden;
      margin-right: 35px;
    }

    &__name {
      font-weight: 500;
      font-size: 24px;
      margin-bottom: 10px;
      img {
        margin-left: 10px;
      }
    }

    &__data {
      font-weight: normal;
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
</style>