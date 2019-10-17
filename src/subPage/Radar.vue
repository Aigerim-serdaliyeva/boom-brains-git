<template>
  <SubPage title="Radar">
    <apexchart type=radar height=350 :options="chartOptions" :series="series" />
  </SubPage>
</template>

<script>
import SubPage from '../components/sub-page/SubPage.vue'

import VueApexCharts from "vue-apexcharts";
export default {
  data() {
    return {
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100],
      }],
      chartOptions: {
        labels: ['Реакция', 'Память', 'Аккуратность', 'Внимание', 'Логика'],        
      }
    }
  },
  components: {
    apexchart: VueApexCharts, SubPage    
  },
}
</script>

<style scoped>
  
</style>