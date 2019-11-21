<template>
    <div class="game-data__chart--min">
        <div class="game-data__img" v-if="!series">
            <img src="@/assets/img/game-data.png" alt="">
        </div>
        <div v-else>
            <apexchart
                type="donut"
                :options="chartOptions"
                :series="series"
            />
        </div>        
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import axios from "axios";

export default {
    components: {
        apexchart: VueApexCharts
    },
    data() {
        return {
            series: [],
            chartOptions: {
                dataLabels: {
                  enabled: false
                }, 
                labels: [
                    this.$t("game.tableShulte"),
                    this.$t("game.rememberNumber"),
                    this.$t("game.findNumber"),
                    this.$t("game.calculate"),
                    this.$t("game.equation"),
                    this.$t("game.shulteLetters"),
                    this.$t("game.rememberWords"),
                    this.$t("game.memorySquare"),
                    this.$t("game.coloredFigures"),
                    this.$t("game.coloredWords")
                ],
                fill: {
                    colors: [
                        "#F63871",
                        "#FD9300",
                        "#5ACC02",
                        "#11ADCF",
                        "#5D17BF",
                        "#FAF118",
                        "#9D348D",
                        "#8B74BC",
                        "#37BFAF",
                        "#008E5B"
                    ]
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: "bottom"
                            }
                        }
                    }
                ],
                plotOptions: {
                    pie: {
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
    },
    mounted() {
        this.fetchGameData();
    },
    methods: {
        async fetchGameData() {
            try {
                const res = await axios.get("api/game-data");
                const data = await res.data;
                const { names, records } = data;      

                this.series = records
                this.chartOptions.labels = names
            } 
            catch (error) {
                throw error;
            }
        }
    },
};
</script>

<style lang="scss">
.game-data {
    &__img {
        position: relative;
        img {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 15px;
        }
    }
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
          &-datalabels-group {
            //   position: relative;
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
