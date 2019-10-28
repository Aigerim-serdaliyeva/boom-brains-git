<template>
    <SubPage title="Данные по играм"> 
        <apexchart
            type="donut"
            height="350"
            :options="chartOptions"
            :series="series"
        />
        <div class="apexchart__text">Все тренажены направленны на тренировку различных функций мозга мы советуем равномерно распределять время между тренажерами.</div> <br>
        <div class="apexchart__text">Используя различные тренажеры, вы лучше стимулируете мозг. 
            По нашим показателям люди использующие разнообразные тренажеры показывают более сильный прогресс в результатах чем люди использующие всего один.</div>
    </SubPage>
</template>

<script>
import SubPage from "../../components/sub-page/SubPage.vue";
import VueApexCharts from "vue-apexcharts";

export default {
    components: { 
        SubPage, 
        apexchart: VueApexCharts,
    },
    data() {
        return {
            series: [65, 55, 41, 17, 15],
            chartOptions: {
                labels: ['Таблица шульте', 'Запомни число', 'Найди число', 'Вычисли', 'Определи знак'],
                fill: {
                    colors: ['#F63871', '#FD9300', '#5ACC02', '#11ADCF', '#5D17BF', '#FDDF76']
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                    }
                }],
                plotOptions: {
                    pie: {
                        donut: {
                            size: '65%',
                            labels: {
                                show: true,
                                name: {
                                   color: '#FD9300'
                                },
                                value: {
                                    // Рекорд:
                                   color: '#FD9300'
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
</script>

<style lang="scss">

    .apexcharts {
        &-canvas {
            margin: 0 auto;
        }
        &-legend {
            display: none !important;
        }
        &-datalabel-label {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 580px) {
        .game-data {
        }
        .apexcharts {
            &-canvas {
            }
        }
    } 

</style>
