<template>
  <div>
    <Grid>
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
  .grid__block {
    background: #F1F1F1;
    border-radius: 5px;
    &--1 {
      grid-column-start: 1;
      grid-column-end: 2;
    };
    &--2 {
      grid-column-start: 2;
      grid-column-end: 3;
    };
    &--3 {
      grid-column-start: 3;
      grid-column-end: 4;
    };
    &--4 {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 3;
    };
    &--5 {
      grid-row-start: 2;
      grid-column-start: 3;
    };
    &--6 {
      grid-row-start: 3;
      grid-column-start: 3;
    };
    &--7 {
      grid-column-start: 4;
    }
    &--8 {      
      grid-row-start: 2;      
      grid-column-start: 4;
    };

  }
</style>