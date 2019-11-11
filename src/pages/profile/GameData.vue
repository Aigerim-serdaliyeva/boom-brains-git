<template>
    <SubPage :title="$t('widget.gamedata')"> 
        <div class="row justify-content-center align-items-center">
            <div class="col-xl-4 col-lg-6 col-md-5 col-sm-6">
                <div class="game-data__chart">
                    <apexchart
                        type="donut"
                        :options="chartOptions"
                        :series="series"
                    />
                </div>
            </div>
        </div>
        <div class="apexchart__text">{{ $t('game.text1') }}</div> <br>
        <div class="apexchart__text">{{ $t('game.text2') }}</div>
    </SubPage>
</template>

<script>
import SubPage from "../../components/sub-page/SubPage.vue";
import VueApexCharts from "vue-apexcharts";

export default {
    components: {
        SubPage,
        apexchart: VueApexCharts
    },
    data() {
        return {
            series: [65, 55, 41, 17, 15],
            chartOptions: {
                labels: [
                    this.$t('game.tableShulte'),
                    this.$t('game.rememberNumber'),
                    this.$t('game.findNumber'),
                    this.$t('game.calculate'),
                    this.$t('game.equation'),
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
                            // size: '65%',
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
        };
    },
    i18n: {
        messages: {
            ru: {
                game: {
                    text1: "Все тренажены направленны на тренировку различных функций мозга мы советуем равномерно распределять время между тренажерами.",
                    text2: "Используя различные тренажеры, вы лучше стимулируете мозг. По нашим показателям люди использующие разнообразные тренажеры показывают более сильный прогресс в результатах чем люди использующие всего один."
                }
            },
            kz: {
                game: {
                    text1: "Барлық тренажерлер мидың әртүрлі функцияларын үйретуге бағытталған, біз сізге тренажерлер арасында уақытты біркелкі бөлуге кеңес береміз.",
                    text2: "Әр түрлі тренажерларды қолдана отырып, сіз мидың жұмысын жақсарта аласыз. Біздің көрсеткіштерімізге сәйкес, әртүрлі тренажерларды қолданатын адамдар біреуін қолданған адамдарға қарағанда, анағұрлым жоғары прогресті көрсетеді."
                }
            }
        }
    }
};
</script>

<style lang="scss">

    .game-data {
        &__chart {
            height: 320px;
            width: 320px;
            margin: 0 auto;
        }
    }

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
            &__chart {
                height: 180px;
                width: 300px;
                margin: 0 auto;
            }
        }
    } 

</style>
