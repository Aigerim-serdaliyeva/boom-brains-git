<template>
    <SubPage :title="$t('widget.age')">
        <div class="age__chart">
            <div class="age__chart__text">{{ $t("chart.averageIndicator") }}</div>
            <apexchart
                type="bar"
                height="100%"
                :options="chartOptions"
                :series="series"
            />
        </div>
        <div class="apexchart__text">{{ $t("age.text") }}</div>
    </SubPage>
</template>

<script>
import SubPage from '../../../components/sub-page/SubPage.vue'
import VueApexCharts from "vue-apexcharts";
export default {
    data() {
        return {
            series: [
                {
                    name: "series-1",
                    data: [44, 55, 41, 75, 22, 43, 21, 33]
                }
            ],
            chartOptions: {
                dataLabels: {
                    enabled: false
                },
                tooltip: {
                    enabled: false
                },
                chart: {
                    // id: 'basic-bar'
                },
                xaxis: {
                    categories: [
                        this.$tc("years", "10-15"),
                        this.$tc("years", "15-20"),
                        this.$tc("years", "20-25"),
                        this.$tc("years", "30-35"),
                        this.$tc("years", "40-45"),
                        this.$tc("years", "50-55"),
                        this.$tc("years", "60-65"),
                        this.$tc("years", "70-75+")
                    ]
                },
                yaxis: {
                    show: true,
                    showAlways: true,
                    line: true,
                    labels: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#888888"
                    },
                    axisTicks: {
                        show: true
                    }
                },
                fill: {
                    colors: ["#12ACCE", "#1989A1"]
                }
            }
        };
    },
    components: {
        SubPage,
        apexchart: VueApexCharts
    },
    i18n: {
        messages: {
            ru: {
                // age: {
                //     text:
                //         "По нашим данным наибольшая активность мозга проявляется в возрасте от 17 до 35 лет. Существую “люди исключения” с достаточными тренировками мозговой деятельности некоторые люди поддерживают его активность в хорошей форме даже до 50-60 лет."
                // }
            },
            en: {
                age: {
                    text: ""
                }
            },
            kz: {
                age: {
                    text:
                        "Біздің мәліметтеріміз бойынша, мидың ең жоғары белсенділігі 17-ден 35 жасқа дейін байқалады. Кейбір адамдар миын жаттықтыру арқылы, 50-60 жасқа дейін өзін жақсы деңгейде ұстайды."
                }
            }
        }
    }
};
</script>

<style lang="scss">
.age__chart {
    height: 350px;
    position: relative;
    margin: 30px 0 0 20px;
    &__text {
        font-size: 11px;
        font-weight: 500;
        max-width: 60px;
        text-align: center;
        position: absolute;
        top: -15px;
        left: -15px;
    }
}
</style>
