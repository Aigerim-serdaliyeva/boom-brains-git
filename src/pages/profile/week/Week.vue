<template>
    <div>
        <SubPage :title="$t('widget.week')">
            <NoDataChart v-if="!dataResponse" />
            <div class="row" v-else>
                <div class="col-md-4 col-sm-6 col-8">
                    <h2 class="apexchart__title">{{ $tc("title", 0) }}</h2>
                    <div class="week__chart">
                        <LastWeek />
                    </div>
                </div>
                <div class="col-md-8 h-100">
                    <h2 class="apexchart__title">{{ $tc("title", 1) }}</h2>
                    <div class="week__chart">
                        <apexchart
                            type="bar"
                            :options="chartOptions"
                            :series="series"
                            height="100%"
                        >
                        </apexchart>
                    </div>
                </div>
                <div class="apexchart__text">{{ $t("text") }}</div>
            </div>
        </SubPage>
    </div>
</template>

<script>
import NoDataChart from '../../../components/NoDataChart.vue'
import LastWeek from "./LastWeek.vue";
import SubPage from "../../../components/sub-page/SubPage.vue";
import VueApexCharts from "vue-apexcharts";
import axios from "axios";

function displayTime(minutes) {
    var dHours = Math.floor(minutes / 60);
    var dMinutes = minutes % 60;
    var time = "";

    if (dHours > 0) {
        time += dHours + " час";
    } 
    if (dHours > 0 && dMinutes > 0) {
        time = dHours + " час" + dMinutes + " мин";
    }    
    if (time === "") {
        time = minutes + " мин";
    }
    return time;
}

export default {
    data() {
        return {            
            dataResponse: {
                prev: null,
                cur: null,
              
            },
            series: [
                {
                    data: [44, 35, 7, 67, 13, 20, 25]
                }
            ],
            chartOptions: {
                chart: {
                    id: "basic-bar"
                },
                dataLabels: {
                    enabled: true,
                    orientation: 'vertical',
                    textAnchor: 'middle',
                    formatter: function(minutes) {
                        var dHours = Math.floor(minutes / 60);
                        var dMinutes = minutes % 60;
                        var time = "";

                        if (dHours > 0) {
                            time += dHours + " час ";
                        } 
                        if (dHours > 0 && dMinutes > 0) {
                            time = dHours + ' час ' + dMinutes + " мин";
                        }    
                        if (time === "") {
                            time = minutes + '\n мин';
                        }
                        return time;
                        // return time.replace('\n','<br/>');
                    },
                    style: {
                        fontSize: '14px',
                        color: "#fff",
                        whiteSpace: 'pre' 
                    },
                     offsetX: 0,
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
                            } else if (value > 30 && value <= 40) {
                                return "#5689B2";
                            } else if (value <= 10 && value > 1) {
                                return "#E93E76";
                            } else if (value <= 1) {
                                return "#888";
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
        SubPage,
        apexchart: VueApexCharts,
        LastWeek, NoDataChart
    },
    mounted() {
        this.fetchWeek();
    },
    methods: {
        async fetchWeek() {
            try {
                const res = await axios.get("api/week");
                const data = await res.data;
                const { prev, cur, week } = data;

                if(!data) {
                    this.dataResponse = false
                    return
                }

                this.dataResponse.prev = prev;
                this.dataResponse.cur = cur;

                let fetchedWeek = week.slice();
                fetchedWeek = fetchedWeek.map(({total}) => total);                

                this.series = [{
                    data: fetchedWeek
                }]
            } catch (error) {
                throw error;
            }
        }
    },
    i18n: {
        messages: {
            ru: {
                title:
                    "Дни тренировок на этой неделе | Сравнение с пред идущей",
                text:
                    "По нашим показателям у людей которые уделяют тренажерам около 10 минут в день и более, наблюдается значительное улучшение результатов. Но не стоит забывать что для улучшения работоспособности мозга нужны не только тренировки но и отдых"
            },
            en: {
                title: "Training days this week | Comparison with the previous",
                text: ""
            },
            kz: {
                title:
                    "Осы аптадағы жаттығу күндері | Алдыңғы аптамен салыстыру",
                text:
                    "Біздің көрсеткіштер бойынша, тренажерларға күніне 10 минут немесе одан да көп уақыт бөлетін адамдарда нәтижелер айтарлықтай жақсарады. Бірақ мидың жұмысын жақсарту үшін сізге жаттығу ғана емес, сонымен қатар релаксация қажет екенін ұмытпаңыз"
            }
        }
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
