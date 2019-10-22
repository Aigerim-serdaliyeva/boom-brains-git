<template>
    <SubPage title="Возрастрная статистика">
        <apexchart
            type="bar"
            height="350"
            :options="chartOptions"
            :series="series"
        />
    </SubPage>
</template>

<script>
import SubPage from "../../components/sub-page/SubPage.vue";
import VueApexCharts from "vue-apexcharts";
export default {
    data() {
        return {
            series: [
                {
                    name: "Servings",
                    data: [44, 55, 41, 67, 22, 43, 21, 33]
                }
            ],
            chartOptions: {
                annotations: {
                    points: [
                        {
                            x: "Bananas",
                            seriesIndex: 0,
                            label: {
                                borderColor: "#775DD0",
                                offsetY: 0,
                                style: {
                                    color: "#fff",
                                    background: "#775DD0"
                                },
                                text: "Bananas are good"
                            }
                        }
                    ]
                },
                // chart: {
                //     height: 350,
                //     type: 'bar',
                // },
                plotOptions: {
                    bar: {
                        columnWidth: "50%",
                        endingShape: "rounded"
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    // width: 0
                },
                grid: {
                    row: {
                        colors: ["#fff", "#E7EFF1"]
                    }
                },
                xaxis: {
                    // labels: {
                    //     rotate: -45
                    // },
                    categories: [
                        "10-15 лет",
                        "15-20 лет",
                        "20-25 лет",
                        "30-35 лет",
                        "40-45 лет",
                        "50-55 лет",
                        "60-65 лет",
                        "70-75+ лет"
                    ]
                },
                yaxis: {
                    title: {
                        text: "Servings"
                    }
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shade: "light",
                        type: "horizontal",
                        shadeIntensity: 0.25,
                        gradientToColors: undefined,
                        inverseColors: true,
                        opacityFrom: 0.85,
                        opacityTo: 0.85,
                        stops: [50, 0, 100]
                    }
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

<style lang="scss"></style>
