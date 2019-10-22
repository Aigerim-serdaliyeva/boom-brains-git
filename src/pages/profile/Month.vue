<template>
    <SubPage title="Прогресс за месяц">
        <apexchart
            type="area"
            height="350"
            :series="series"
            :options="chartOptions"
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
                    // name: "Series 1",
                    data: [10000, 30000, 50000, 55000, 47000, 28000, 12000]
                }
            ],
            chartOptions: {
                fill: {
                    type: "gradient",
                    gradient: {
                        shade: "#06CC02",
                        gradientToColors: ["#FFD600"],
                        shadeIntensity: 1,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100, 100, 100]
                    }
                },
                stroke: {
                    width: 0,
                    curve: "smooth"
                },
                yaxis: {
                    title: {
                        text: "Результат"
                    }
                },
                markers: {
                    size: 2,
                    opacity: 0.9,
                    colors: ["#06CC02"],
                    strokeColor: "#fff",
                    strokeWidth: 1,
                    hover: {
                        size: 4
                    }
                },
                xaxis: {
                    type: "datetime",
                    categories: [
                        "01 Jan",
                        "02 Jan",
                        "03 Jan",
                        "04 Jan",
                        "05 Jan",
                        "06 Jan",
                        "07 Jan"
                    ]
                    // labels: {
                    //     formatter: function(value, timestamp, index) {
                    //         return moment(new Date(timestamp)).format("DD MMM YYYY")
                    //     }
                    // }
                },
                yaxis: {
                    show: true,
                    showAlways: true,
                    seriesName: undefined,
                    opposite: false,
                    reversed: false,
                    logarithmic: false,
                    tickAmount: 8,
                    // min: 12,
                    // max: 6,
                    // forceNiceScale: false,
                    decimalsInFloat: undefined,
                    labels: {
                        show: true,
                        align: "right",
                        minWidth: 0,
                        // maxWidth: 160,
                        offsetX: 0,
                        offsetY: 0,
                        rotate: 0
                        // formatter: (value) => { return val },
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

<style lang="scss">
.apexcharts {
    &-yaxis {
        // display: block !important;
    }
}
</style>
