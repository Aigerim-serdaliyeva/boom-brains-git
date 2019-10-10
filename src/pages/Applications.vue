<template>
  <div>
    <h2>Applications</h2>
    <Chart />
    <GameData />
    <Radar />
  </div>
</template>

<script>
import Radar from '../statistics/Radar.vue'
import GameData from '../statistics/GameData.vue'
import Chart from '../statistics/Chart.vue'
export default {
  components: { 
    Chart, 
    GameData, 
    Radar
    
  }
}
</script>

<style lang="scss" scoped>

</style>