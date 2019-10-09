<template>
  <div>
    <Grid>
      <Widget title="Недельная активность"></Widget>
      <Widget title="Прогресс за месяц"></Widget>
      <Widget title="Данные по играм"></Widget>
      <Widget title="Рейтинг Cреди друзей">
        <ol>
          <li>Nagibator 228 <span>23123</span></li>
          <li>PtNaNezhnost <span>13123</span></li>
        </ol>
      </Widget>
      <Widget title=""></Widget>
      <Widget title="Рейтинг Cреди друзей"></Widget>
      <Widget title="Мировой Рейтинг"></Widget>      
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

</style>