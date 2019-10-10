<template>
  <div>
    <apexchart type=radar height=350 :options="chartOptions" :series="series" />
  </div>
</template>

<script>

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
    apexchart: VueApexCharts,
  },
}
</script>

<style scoped>
  .apexcharts-toolbar {
    display: none !important;
  }
</style>