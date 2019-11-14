<template>
    <div class="game-data__chart--min">
        <apexchart
            type="donut"
            :options="chartOptions"
            :series="series"
        />
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
    components: {
        apexchart: VueApexCharts
    },
    data() {
        return {
            series: [65, 55, 41, 17, 15],
            chartOptions: {      
                dataLabels: {
                  enabled: false
                },        
                labels: [
                    this.$t("game.tableShulte"),
                    this.$t("game.rememberNumber"),
                    this.$t("game.findNumber"),
                    this.$t("game.calculate"),
                    this.$t("game.equation")
                ],
                fill: {
                    colors: [
                        "#F63871",
                        "#FD9300",
                        "#5ACC02",
                        "#11ADCF",
                        "#5D17BF",
                        "#FDDF76"
                    ]
                },
                responsive: [
                    {
                        // breakpoint: 480,
                        options: {
                            chart: {
                                // width: 200
                            },
                            legend: {
                                // position: "bottom"
                            }
                        }
                    }
                ],
                plotOptions: {
                    pie: {
                        expandOnClick: false,
                        donut: {
                            labels: {
                                show: true,
                                name: {
                                  show: true,
                                  color: "#FD9300"
                                },
                                value: {
                                  show: true,
                                    color: "#FD9300"
                                },
                                total: {
                                    show: true,
                                    color: "#FD9300",
                                    label: this.$t("chart.total")
                                }
                            }
                        }
                    }
                }
            }
        };
    }
};
</script>

<style lang="scss">
.game-data {
    &__chart--min {
      height: 220px;
      width: 220px;
      margin: 0 auto -30px -5px;

      .apexcharts {
          &-canvas {
              margin: 0 auto;
          }
          &-legend {
              display: none !important;
          }
          &-datalabel {
            &-label {
              font-size: 12px;
              max-width: 50px;
            }
            &-value {
              font-size: 14px;
            }
          }
          
      }
    }
}

@media screen and (max-width: 1370px) {
  .game-data {
      &__chart--min {
        height: 200px;
        width: 200px;
        margin: 0 auto -35px -7px;
      }
  }
}

@media screen and (max-width: 1200px) {
  .game-data {
      &__chart--min {
        height: 180px;
        width: 180px;
        margin: 0 auto -40px -10px;
      }
  }
}

</style>
