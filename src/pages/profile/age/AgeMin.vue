<template>
    <div class="chart__min">
        <div class="age__chart--min">
            <apexchart
                type="bar"
                height="100%"
                :options="chartOptions"
                :series="series"
            />
        </div>      
        <div class="chart__min__os chart__min__os--y">{{ $t('chart.indicators') }}</div>
        <div class="chart__min__os chart__min__os--x">{{ $t('chart.age') }}</div>
      </div> 
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
    data() {
        return {
            series: [
                {
                    name: "series-1",
                    data: [44, 55, 41, 75, 22, 43, 21, 33]
                }
            ],
            chartOptions: {
                dataLabels: {
                    enabled: false
                },
                tooltip: {
                    enabled: false
                },
                xaxis: {
                  labels: {
                        show: false
                    },
                    categories: [
                        this.$tc("years", "10-15"),
                        this.$tc("years", "15-20"),
                        this.$tc("years", "20-25"),
                        this.$tc("years", "30-35"),
                        this.$tc("years", "40-45"),
                        this.$tc("years", "50-55"),
                        this.$tc("years", "60-65"),
                        this.$tc("years", "70-75+")
                    ]
                },
                yaxis: {
                    show: true,
                    showAlways: true,
                    line: true,
                    axisBorder: {
                        show: true,
                        color: "#888888"
                    },
                    axisTicks: {
                        show: true
                    }
                },
                fill: {
                    colors: ["#12ACCE", "#1989A1"]
                }
            }
        };
    },
    components: {
        apexchart: VueApexCharts
    }
};
</script>

<style lang="scss">
.age__chart {
    &--min {
      height: 170px;
        width: 250px;
        margin-left: -20px;
        margin-bottom: 10px;
    }
}

@media screen and (max-width: 1370px) {
  .age__chart {
    &--min {
        width: 230px;
        margin-bottom: 10px;
    }    
  }
}

@media screen and (max-width: 1200px) {

    .age__chart {
      &--min {
          width: 200px;
          margin-bottom: 5px;
      }    
    }
  }
</style>
