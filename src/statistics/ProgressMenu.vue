<template>
  <div>
    <Grid>
      <div class="grid__content">
        <div class="grid__top">
            <div class="grid__block grid__block--1">
            <router-link to="week"> 
              <img src="../assets/img/grid-1.jpg" alt="">
            </router-link>
          </div>
          <div class="grid__block grid__block--2">
            <router-link to="month"> 
              <img src="../assets/img/grid-2.jpg" alt="">
            </router-link>
          </div>
          <div class="grid__block grid__block--3">
            <router-link to="game-data"> 
              <img src="../assets/img/grid-3.jpg" alt="">
            </router-link>
          </div>
        </div>
        <div class="grid__bottom">
          <div class="grid__block grid__block--4">
            <router-link to="radar"> 
              <img src="../assets/img/grid-4.jpg" alt="">
            </router-link>
          </div> 
          <div class="grid__block grid__block--5">
            <router-link to="age"> 
              <img src="../assets/img/grid-5.jpg" alt="">
            </router-link>
          </div>
          <div class="grid__block grid__block--6">
            <router-link to="records"> 
              Records
            </router-link>
          </div> 
        </div>
      </div>
      <div class="grid__right">
        <div class="grid__block grid__block--7">
          <router-link to="rating-friends"> 
            Friends rating
          </router-link>
        </div>   
        <div class="grid__block grid__block--8">
          <router-link to="rating-world"> 
            <img src="../assets/img/grid-7.jpg" alt="">
          </router-link>
        </div> 
      </div>      
    </Grid>
  </div>
</template>

<script>
import Grid from '../components/Grid.vue'
export default {
  components: {
    Grid
  }
}
</script>

<style lang="scss">

  .grid__content, .grid__top, .grid__bottom, .grid__right {
    display: grid;    
    grid-gap: 5px;    
    align-items: start;
  }
  
  .grid__top {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid__bottom {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid__block {
    background: #F1F1F1;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    &--4 {
      grid-row-start: 1;
      grid-row-end: 3;
    }

    &--6 {
      width: 250px;
      height: 222px;
    }

    &--7 {
      width: 250px;
      height: 325px;
    }
  }
</style>