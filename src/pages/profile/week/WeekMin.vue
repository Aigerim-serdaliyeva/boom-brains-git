<template>
  <div class="week__chart--min">
      <apexchart
          type="bar"
          :options="chartOptions"
          :series="series"
          height="100%"
      >
      </apexchart>
  </div>
</template>

<script>
import NoDataChart from '../../../components/NoDataChart.vue'
import VueApexCharts from "vue-apexcharts";

export default {
    data() {
        return {
            series: [
                {
                    data: [40, 35, 7, 45, 13, 20, 25]
                }
            ],
            chartOptions: {
                chart: {
                    id: "basic-bar"
                },
                dataLabels: {
                    enabled: false
                },
                tooltip: {
                    enabled: false
                },
                fill: {
                    colors: [
                        function({ value, seriesIndex, w }) {
                            if (value > 10 && value <= 20) {
                                return "#A46192";
                            } else if (value > 20 && value <= 30) {
                                return "#6F7CA8";
                            } else if (value > 30 && value <= 35) {
                                return "#5689B2";
                            } else if (value <= 10) {
                                return "#E93E76";
                            } else {
                                return "#12ACCE";
                            }
                        }
                    ]
                },
                grid: {
                    row: {
                        colors: ["#F1F1F1", "#EBEBEB"]
                    }
                },
                xaxis: {
                    categories: [
                        this.$t("week.mon"),
                        this.$t("week.tue"),
                        this.$t("week.wed"),
                        this.$t("week.thu"),
                        this.$t("week.fri"),
                        this.$t("week.sat"),
                        this.$t("week.sun")
                    ]
                },
                yaxis: {
                    tickAmount: 6
                }
            }
        };
    },
    components: {
        apexchart: VueApexCharts,
        NoDataChart
    }
};
</script>

<style lang="scss">
.week {
    &__chart--min {
        height: 250px;
        width: 270px;
        margin-left: -30px;
    }
}

.apexcharts {
    &-yaxis {
        display: none;
    }
    &-xaxis-label {
        font-size: 12px;
        font-weight: 500;
    }
}

@media screen and (max-width: 1370px) {
    .week {
        &__chart--min {
            width: 230px;
        }
    }
}

@media screen and (max-width: 1200px) {
    .week {
        &__chart--min {
            width: 210px;
            margin-left: -35px;
            height: 160px;
        }
    }
}
</style>
