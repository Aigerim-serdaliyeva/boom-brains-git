<template>
    <div class="month__chart">
        <apexchart
            type="area"
            :series="series"
            height="100%"
            :options="options"
        />
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
    data() {
        const $this = this;
        return {
            series: [
                {
                    name: "Series 1",
                    data: [
                        ["05/06/2019", 34],
                        ["05/08/2019", 43],
                        ["05/11/2019", 31],
                        ["05/14/2019", 43],
                        ["05/16/2019", 33],
                        ["05/19/2019", 52]
                    ]
                }
            ],
            options: {
                chart: {
                    // height: 'auto'
                    // height: '100%'
                },
                tooltip: {
                    enabled: false
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shade: "dark",
                        shadeIntensity: 1,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100, 100, 100],
                        colorStops: [
                            {
                                offset: 0,
                                color: "#06CC02",
                                opacity: 0.7
                            },
                            {
                                offset: 150,
                                color: "#FFD600",
                                opacity: 0.7
                            }
                        ]
                    }
                },
                grid: {
                    row: {
                        colors: ["#F1F1F1", "#ECECEC"]
                    }
                },
                stroke: {
                    width: 0,
                    curve: "smooth"
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
                    // tickAmount: 30,
                    // min: new Date("01/01/2019").getTime(),
                    // max: new Date("01/31/2019").getTime(),
                    labels: {
                        rotate: -45,
                        rotateAlways: true,
                        formatter: function(val, timestamp) {
                            return $this
                                .$moment(new Date(timestamp))
                                .format("DD.MM");
                        }
                    }
                },
                yaxis: {
                    show: true,
                    showAlways: true,
                    seriesName: undefined,
                    opposite: false,
                    reversed: false,
                    logarithmic: false,
                    tickAmount: 6,
                    decimalsInFloat: undefined,
                    labels: {
                        show: true,
                        align: "right",
                        minWidth: 0,
                        offsetX: 0,
                        offsetY: 0,
                        rotate: 0
                    },
                    axisBorder: {
                        show: true,
                        color: "#888888"
                    },
                    axisTicks: {
                        show: true
                    }
                }
            }
        };
    },
    components: {
        apexchart: VueApexCharts
    }
};
</script>

<style lang="scss"></style>
