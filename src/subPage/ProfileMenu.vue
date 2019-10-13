<template>
  <div>
    <Grid>
      <router-link to="/profile/week" :style="{'grid-area': '1 / 1 / span 2 / span 1'}"> 
        <Widget title="Недельная активность"></Widget>
      </router-link>
      <router-link to="/profile/month" :style="{'grid-area': '1 / 2 / span 2 / span 1'}"> 
        <Widget title="Прогресс за месяц"></Widget>
      </router-link>
      <router-link to="/profile/game-data" :style="{'grid-area': '1 / 3 / span 2 / span 1'}"> 
        <Widget title="Данные по играм"></Widget>
      </router-link>
      <router-link to="/profile/rating-friends" :style="{'grid-area': '1 / 4 / span 3 / span 1'}"> 
        <Widget title="Рейтинг среди друзей"></Widget>
      </router-link>
      <router-link to="/profile/radar" :style="{'grid-area': '3 / 1 / span 4 / span 2'}"> 
        <Widget title="Radar"></Widget>
      </router-link>
      <router-link to="/profile/age" :style="{'grid-area': '3 / 3 / span 2 / span 1'}"> 
        <Widget title="Возрастная статистика"></Widget>
      </router-link>
      <router-link to="/profile/records" :style="{'grid-area': '5 / 3 / span 2 / span 1'}"> 
        <Widget title="Рекорды"></Widget>
      </router-link>
      <router-link to="/profile/rating-world" :style="{'grid-area': '4 / 4 / span 3 / span 1'}"> 
        <Widget title="Мировой рейтинг"></Widget>
      </router-link>
    </Grid>
  </div>
</template>

<script>
import Grid from '../components/Grid.vue'
import Widget from '../components/Widget.vue'
export default {
  components: {
    Grid,
    Widget
  }
}
</script>

<style lang="scss">

</style>