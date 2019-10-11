<template>
  <div>
    <!-- <Grid> -->
      <router-view></router-view>  
    <!-- </Grid> -->
  </div>
</template>

<script>
// import Grid from '../components/Grid'
// import Widget from '../components/Widget'
export default {
  components: {
    // Grid,
    // Widget, 
  }
}
</script>

<style lang="scss" scoped>
  .grid__block {
    background: #F1F1F1;
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