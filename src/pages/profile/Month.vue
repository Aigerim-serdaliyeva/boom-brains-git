<template>
    <SubPage title="Прогресс за месяц"> 
        <div class="month">
            <div class="month__button active">1 Месяц</div>
            <div class="month__button">6 Месяцев</div>
            <div class="month__button">12 Месяцев</div>
        </div>
        <apexchart
            type="area"
            height="350"
            :series="series"
            :options="chartOptions"
        />
        <div class="d-flex justify-content-between">
            <div class="apexchart__text">Количество очков за прошлый месяц: <span>74999</span></div>
            <div class="apexchart__text">Количество очков за этот месяц: <span>4999</span></div>
        </div>
    </SubPage>
</template>

<script>
import SubPage from "../../components/sub-page/SubPage.vue";
import VueApexCharts from "vue-apexcharts";

export default {
    data() {
        const $this = this;
        return {
            series: [
                {
                    // name: "Series 1",
                    data: [
                        ['05/06/2019', 34],
                        ['05/10/2019', 43],
                        ['05/11/2019', 31],
                        ['05/15/2019', 43],
                        ['05/20/2019', 33],
                        ['05/22/2019', 52]
                    ]
                }
            ],
            chartOptions: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        // shade: '#06CC02',
                        gradientToColors: ['#FFD600', '#06CC02'],
                        shadeIntensity: 1,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100, 100, 100]
                    },
                },
                grid: {
                    row: {
                        colors: ['#F1F1F1', '#ECECEC']
                    }
                },
                stroke: {
                    width: 0,
                    curve: 'smooth'
                },
                yaxis: {
                    title: {
                        text: 'Результат',
                    },
                },
                markers: {
                    size: 2,
                    opacity: 0.9,
                    colors: ["#06CC02"],
                    strokeColor: "#fff",
                    strokeWidth: 1,                    
                    hover: {
                        size: 4,
                    }
                },
                xaxis: {
                    type: "datetime",
                    tickAmount: 30,
                    min: new Date("01/01/2019").getTime(),
                    max: new Date("01/31/2019").getTime(),
                    labels: {
                      rotate: -45,
                      rotateAlways: true,
                        formatter: function(val, timestamp) {
                                return $this.$moment(new Date(timestamp)).format("DD.MM");
                            // }
                        }
                    }
                    
                    // type: 'datetime',
                    // categories: [
                    //     "01 Jan",
                    //     "02 Jan",
                    //     "03 Jan",
                    //     "04 Jan",
                    //     "05 Jan",
                    //     "06 Jan",
                    //     "07 Jan",
                    //     "01 Jan",
                    //     "02 Jan",
                    //     "03 Jan",
                    //     "04 Jan",
                    //     "05 Jan",
                    //     "06 Jan",
                    //     "07 Jan"
                    // ],  
                    // labels: {
                    //      formatter: function(value, timestamp, index) {
                    //         return moment(new Date(timestamp)).format("DD MMM YYYY")
                    //     }
                    // }
                    // labels: {
                    //     format: 'dd.MM',
                    // }       
                    // labels: {
                    //     formatter: function (value, timestamp) {
                    //     return new Date(timestamp) // The formatter function overrides format property
                    //     }, 
                    // }           
                    // labels: {
                    //     formatter: function(value, timestamp, index) {
                    //         return moment(new Date(timestamp)).format("DD MMM YYYY")
                    //     }
                    // }
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
                        align: 'right',
                        minWidth: 0,
                        // maxWidth: 160,
                        offsetX: 0,
                        offsetY: 0,
                        rotate: 0,
                        // formatter: (value) => { return val },
                    },     
                    // crosshairs: {
                    //     show: true
                    // },
                    axisBorder: {
                        show: true,
                        color: "#888888"
                    },
                    axisTicks: {
                        show: true,
                    }         
                },
  
            }
        }
    },
    components: { 
        SubPage,        
        apexchart: VueApexCharts,
    }
};
</script>

<style lang="scss">
    .month {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: normal;
        font-size: 13px;
        margin-bottom: 10px;
        &__button {
            padding: 6px 17px;
            border-radius: 33px;
            &.active {
                background: #fff;
            }
        }
    }
    .apexcharts {
        position: relative;
        &-yaxis {
            // display: block !important;
        }
        &-xaxis-label  {
            // position: absolute;
            // transform-origin: 0 0;
            //  transform: rotate(-30deg);
            // transform: rotate(-45deg, 1.16406, 288.289);
        }
    }
</style>


                    