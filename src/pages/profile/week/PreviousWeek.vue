<template>
        <apexchart
            type=bar 
            :options="chartOptions" 
            :series="series"
            height="100%"
        >    
        </apexchart> 
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
    data() {
        return {
            series: [{
                data: [44, 60]
            }],
            chartOptions: {  
                dataLabels: {
                    enabled: true,
                },
                fill: {
                    colors: [
                        function({ value, seriesIndex, w }) {
                            if (value > 10 && value <= 20) {
                                return "#A46192";
                            } else if (value > 20 && value <= 30) {
                                return "#6F7CA8";
                            } else if (value > 30 && value <= 40) {
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
                        colors: ['#F1F1F1', '#EBEBEB']
                    }
                },
                xaxis: {
                    categories: [
                        'Прошлая неделя',
                        'Эта неделя',
                    ],                    
                },
                yaxis: {
                    tickAmount: 6,
                }
            }
        };
    },
    components: { 
        apexchart: VueApexCharts,
    }
};
</script>

<style lang="scss">
    .apexcharts {        
        &-xaxis-label {

        }
    }

    @media screen and (max-width: 1370px) {
        .apexcharts {
            
        }
    }
}
</style>
