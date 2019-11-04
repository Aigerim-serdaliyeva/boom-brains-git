<template>
    <div class="radar__chart">
        <apexchart
            type="radar"
            height="100%"
            :options="chartOptions"
            :series="series"
        />
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
                    name: "Series 1",
                    data: [20, 110, 50, 40, 100]
                }
            ],
            chartOptions: {
                labels: [
                    "Реакция",
                    "Память",
                    "Аккуратность",
                    "Внимание",
                    "Логика"
                ],
                fill: {
                    colors: ["#FF9900"]
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ["#FF9900"],
                    dashArray: 0
                },
                markers: {
                    size: 3,
                    colors: ["#FF9900"],
                    hover: {
                        size: 4
                    }
                },
                yaxis: {
                    show: false
                }
            }
        };
    },
    components: {
        apexchart: VueApexCharts,
        SubPage
    }
};
</script>

<style lang="scss">
.radar {
    &__chart {
        height: 450px;
        margin-top: -10px;
    }
}

.apexcharts {
    &-menu-icon {
        display: none !important;
    }
    &-datalabel {
        font-size: 17px;
        font-weight: normal;
    }
}

@media screen and (max-width: 1200px) {
    .radar {
        &__chart {
            height: 370px;
        }
    }
    .apexcharts {
        &-canvas {
            height: 300px !important;
        }
        &-svg {
        }
        &-datalabel {
            font-size: 14px;
        }
    }
}

@media screen and (max-width: 767px) {
    .apexcharts {
        &-canvas {
        }
        &-datalabel {
            font-size: 12px;
        }
    }
}
</style>
