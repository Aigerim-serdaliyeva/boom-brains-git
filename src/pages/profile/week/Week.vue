<template>
    <div>
        <SubPage title="Недельная активность">
            <div class="row">
                <div class="col-md-4 col-sm-6 col-8">
                    <h2 class="apexchart__title">Сравнение с пред идущей</h2>
                    <div class="week__chart">
                      <PreviousWeek />
                    </div>
                </div>
                <div class="col-md-8 h-100">
                    <h2 class="apexchart__title">Дни тренировок на этой неделе</h2>
                    <div class="week__chart">
                        <apexchart
                            type=bar 
                            :options="chartOptions" 
                            :series="series"
                            height="100%"
                        >       
                        </apexchart>
                    </div>
                </div>
            </div>
            <div class="apexchart__text">По нашим показателям у людей которые уделяют тренажерам около 10 минут в день и более, наблюдается значительное улучшение результатов. 
                Но не стоит забывать что для улучшения работоспособности мозга нужны не только тренировки но и отдых</div>         
        </SubPage>
    </div>    
</template>

<script>
import PreviousWeek from './PreviousWeek.vue'
import SubPage from '../../../components/sub-page/SubPage.vue'
import VueApexCharts from "vue-apexcharts";

export default {
    data() {
        return {
            series: [{
                data: [44, 35, 7, 67, 13, 20, 25]
            }],
            chartOptions: {  
                chart: {
                    id: 'basic-bar'
                },
                dataLabels: {
                    enabled: true,
                    // formatter: function(value, { seriesIndex, dataPointIndex, w }) {
                    //     return w.config.series[seriesIndex].name + ":  " + value
                    // }
                },
                fill: {
                    colors: [function({ value, seriesIndex, w }) {
                        if(value > 10 && value <= 20) {
                            return '#A46192'
                        } else if (value > 20 && value <= 30) {
                            return '#6F7CA8'
                        } else if (value > 30 && value <= 40) {
                            return '#5689B2'
                        } else if (value <= 10) {
                            return '#E93E76'
                        }
                        else {
                            return '#12ACCE'
                        }
                    }]
                },                
                grid: {
                    row: {
                        colors: ['#F1F1F1', '#EBEBEB']
                    }
                },
                xaxis: {
                    categories: [
                        'пн',
                        'вт',
                        'ср',
                        'чт',
                        'пт',
                        'сб',
                        'вс',
                    ],                    
                },
                yaxis: {
                    tickAmount: 6,
                }
            }        
        }
    },
    components: { 
        SubPage,
        apexchart: VueApexCharts, 
        PreviousWeek
    }
};
</script>

<style lang="scss">

  .week {
    &__chart {
      height: 360px;
    }
  }

    .apexchart {
        &__title {
            font-size: 18px;
            font-weight: 500;
            text-align: center;
        }
    }
    .apexcharts {        
        &-yaxis {
            display: none;
        }
        &-xaxis-label {
            font-size: 16px;
            font-weight: 500;
        } 
    }

    @media screen and (max-width: 1370px) {
        .apexchart {
            &__title {
                font-size: 16px;
            }
        }
    } 

    @media screen and (max-width: 1200px) {
        .week {
            &__chart {
                height: 300px;
            }
        }
    } 
</style>
