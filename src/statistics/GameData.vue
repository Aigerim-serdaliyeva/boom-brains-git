<template>
  <div class="chart-wrap">
    <div id="chart">
      <apexchart type=donut width=380 :options="chartOptions" :series="series" />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      series: [44, 55, 13, 33],
      chartOptions: {
        dataLabels: {
          enabled: false
        },

        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
        }
      }
    }
  },
}
</script>