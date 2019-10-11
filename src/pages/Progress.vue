<template>
  <div>
    <Grid>
      <div class="grid__block grid__block--1"><img src="../assets/img/grid-1.jpg" alt=""></div>
      <div class="grid__block grid__block--2"><img src="../assets/img/grid-2.jpg" alt=""></div>
      <div class="grid__block grid__block--3"><img src="../assets/img/grid-3.jpg" alt=""></div>
      <div class="grid__block grid__block--5"><img src="../assets/img/grid-5.jpg" alt=""></div>
      <div class="grid__block grid__block--6"><img src="../assets/img/grid-5.jpg" alt=""></div>
      <div class="grid__block grid__block--4"><img src="../assets/img/grid-4.jpg" alt=""></div>      
      <div class="grid__block grid__block--7"><img src="../assets/img/grid-7.jpg" alt=""></div>
      <div class="grid__block grid__block--8"><img src="../assets/img/grid-7.jpg" alt=""></div>
    </Grid>
  </div>
</template>

<script>
import Grid from '../components/Grid'
import Widget from '../components/Widget'
export default {
  components: {
    Grid,
    Widget
  }
}
</script>

<style lang="scss" scoped>
  .grid__block {
    &--1 {
      grid-area: a;
    };
    &--2 {
      grid-area: b;
    };
    &--3 {
      grid-area: c;
    };
    &--4 {
      grid-area: n;
    };
    &--5 {
      grid-area: f;
    };
    &--6 {
      grid-area: l;
    };
    &--7 {
      grid-area: d;
    }
    &--8 {
      grid-area: t;
    };

  }
</style>