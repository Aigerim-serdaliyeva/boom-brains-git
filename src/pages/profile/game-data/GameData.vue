<template>
    <SubPage :title="$t('widget.gamedata')">
        <NoDataChart v-if="!series" />
        <div v-else class="row justify-content-center align-items-center">
            <div class="col-xl-4 col-lg-6 col-md-5 col-sm-6">
                <div class="game-data__chart">
                    <apexchart
                        type="donut"
                        :options="chartOptions"
                        :series="series"
                    />
                </div>
            </div>
            <div class="col-12">
                <div class="apexchart__text">{{ $t("game.text1") }}</div>
                <br />
                <div class="apexchart__text">{{ $t("game.text2") }}</div>
            </div>
        </div>        
    </SubPage>
</template>

<script>
import NoDataChart from '../../../components/NoDataChart.vue'
import SubPage from '../../../components/sub-page/SubPage.vue'
import VueApexCharts from "vue-apexcharts";
import axios from "axios";

export default {
    components: {
        SubPage,
        apexchart: VueApexCharts, 
        NoDataChart
    },
    data() {
        return {
            series: [],
            chartOptions: {
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
                                // total: {
                                //     show: true,
                                //     color: "#FD9300",
                                //     label: this.$t("chart.total")
                                // }
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
                    text1:
                        "Все тренажеры направленны на тренировку различных функций мозга мы советуем равномерно распределять время между тренажерами.",
                    text2:
                        "Используя различные тренажеры, вы лучше стимулируете мозг. По нашим показателям люди использующие разнообразные тренажеры показывают более сильный прогресс в результатах чем люди использующие всего один."
                }
            },
            kz: {
                game: {
                    text1:
                        "Барлық тренажерлер мидың әртүрлі функцияларын үйретуге бағытталған, біз сізге тренажерлер арасында уақытты біркелкі бөлуге кеңес береміз.",
                    text2:
                        "Әр түрлі тренажерларды қолдана отырып, сіз мидың жұмысын жақсарта аласыз. Біздің көрсеткіштерімізге сәйкес, әртүрлі тренажерларды қолданатын адамдар біреуін қолданған адамдарға қарағанда, анағұрлым жоғары прогресті көрсетеді."
                }
            }
        }
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

                if(!data) {
                    this.series = false
                    return
                }
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
