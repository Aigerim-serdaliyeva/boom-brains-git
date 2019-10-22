<template>
    <SubPage title="Прогресс за месяц"> 
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
                        [1486684800000, 34],
                        [1486771200000, 43],
                        [1486857600000, 31],
                        [1486944000000, 43],
                        [1487030400000, 33],
                        [1487116800000, 52]
                    ]
                }
            ],
            chartOptions: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: '#06CC02',
                        gradientToColors: ['#FFD600'],
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
                    // tickAmount: 8,
                    labels: {
                        formatter: function(val) {
                                return $this.$moment(new Date(val)).format("DD MMM YYYY");
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
    .apexcharts {
        &-yaxis {
            // display: block !important;
        }
    }
</style>


                    