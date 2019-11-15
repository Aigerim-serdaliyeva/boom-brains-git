<template>
    <div class="chart__min">
      <div class="month__chart--min">
          <apexchart
              type="area"
              height="100%"
              :series="series"
              :options="chartOptions"
          />
      </div>      
        <div class="chart__min__os chart__min__os--y">{{ $t('chart.result') }}</div>
        <div class="chart__min__os chart__min__os--x">{{ $t('chart.month') }}</div>
    </div>    
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
    data() {
        const $this = this;
        return {
            series: [
                {
                  data: [
                      ["06/06/2019", 34],
                      ["07/10/2019", 43],
                      ["08/11/2019", 31],
                      ["09/15/2019", 43],
                      ["10/20/2019", 33],
                      ["11/22/2019", 52]
                  ]
                }
            ],
            chartOptions: {
                dataLabels: {
                  enabled: false
                },  
                fill: {
                    type: "gradient",
                    gradient: {
                        shade: "#06CC02",
                        shadeIntensity: 1,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100, 100, 100],
                        colorStops: [
                            {
                                offset: 0,
                                color: "#06CC02",
                                opacity: 0.8
                            },
                            {
                                offset: 170,
                                color: "#fff",
                                opacity: 0.7
                            }
                        ]
                    }
                },
                tooltip: {
                    enabled: false
                },
                grid: {
                    row: {
                        colors: ["#F1F1F1", "#ECECEC"]
                    }
                },
                stroke: {
                    width: 0,
                    curve: "smooth"
                },
                markers: {
                    size: 0,
                    opacity: 0.9,
                    colors: ["#06CC02"],
                    strokeColor: "#fff",
                    strokeWidth: 1
                },
                xaxis: {
                    type: "datetime",
                    labels: {
                        show: false
                    }
                },
                yaxis: {
                    show: true,
                    showAlways: true,
                    seriesName: undefined,
                    opposite: false,
                    reversed: false,
                    logarithmic: false,
                    tickAmount: 6,
                    decimalsInFloat: undefined,
                    labels: {
                        show: true,
                        align: "right",
                        minWidth: 0,
                        offsetX: 0,
                        offsetY: 0,
                        rotate: 0
                    },
                    axisBorder: {
                        show: true,
                        color: "#888888"
                    },
                    axisTicks: {
                        show: true
                    }
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
.chart {
  &__min {    
    position: relative;
    &__os {
      position: absolute;
      font-size: 12px;
      color: #888;
      font-weight: 300;
      &--y {
        left: -20px;
        top: 50%;
        transform: translateY(-50%) rotate(-90deg);
      }
      &--x {
        left: 50%;
        transform: translateX(-50%);
        bottom: -5px;
      }
    }
  }
}
  .month__chart {
     &--min {
        height: 170px;
        width: 250px;
        margin-left: -25px;
        margin-bottom: 10px;
    }    
  }

  @media screen and (max-width: 1370px) {

    .chart {
      &__min {    
        &__os {
          &--y {
            left: -15px;
          }
          &--x {
            bottom: 3px;
          }
        }
      }
    }

    .month__chart {
      &--min {
          width: 220px;
          margin-left: -25px;
          margin-bottom: 10px;
      }    
    }
  }

  @media screen and (max-width: 1200px) {

    .chart {
      &__min {    
        &__os {
          font-size: 11px;
          &--y {
            left: -15px;
          }
        }
      }
    }

    .month__chart {
      &--min {
          width: 200px;
          margin-bottom: 5px;
      }    
    }
  }
 
</style>
