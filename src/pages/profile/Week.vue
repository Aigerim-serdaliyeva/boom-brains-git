<template>
    <div>
        <SubPage title="Недельная активность">
            <apexchart
                type="bar"
                width="550"
                height="350"
                :options="chartOptions"
                :series="series"
            />
        </SubPage>
    </div>
</template>

<script>
import SubPage from "../../components/sub-page/SubPage.vue";
import VueApexCharts from "vue-apexcharts";

export default {
    data() {
        return {
            series: [
                {
                    data: [44, 35, 7, 67, 13, 20, 25]
                }
            ],
            chartOptions: {
                dataLabels: {
                    enabled: true
                    // formatter: function(value, { seriesIndex, dataPointIndex, w }) {
                    //     return w.config.series[seriesIndex].name + ":  " + value
                    // }
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
                        colors: ["#fff", "#F2F2F2"]
                    }
                },
                xaxis: {
                    categories: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
                },
                yaxis: {
                    tickAmount: 8
                }
            }
        };
    },
    components: {
        SubPage,
        apexchart: VueApexCharts
    }
};
</script>

<style lang="scss">
.apexcharts {
    &-yaxis {
        display: none;
    }
}
</style>
