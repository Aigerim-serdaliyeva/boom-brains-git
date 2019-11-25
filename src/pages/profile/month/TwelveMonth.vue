<template>
    <div class="month__chart">
        <apexchart
            type="area"
            height="100%"
            :series="series"
            :options="chartOptions"
        />
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import axios from 'axios';

export default {
    data() {
        const $this = this;
        return {
            series: [
                {
                    name: '',
                    data: [
                        // ["01/06/2019", 34],
                    ]
                }
            ],
            chartOptions: {
                fill: {
                    type: "gradient",
                    gradient: {
                        shade: "#06CC02",
                        // gradientToColors: ['#FFD600', '#06CC02'],
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
                dataLabels: {
                    enabled: false
                },
                tooltip: {
                    custom: function({series, seriesIndex, dataPointIndex, w}) {
                        return '<div class="arrow_box">' +
                            '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
                            '</div>'
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
                    tickAmount: 11,
                    labels: {
                        rotate: -30,
                        rotateAlways: true,
                        formatter: function(val, timestamp) {
                            return $this
                                .$moment(new Date(timestamp))
                                .format("MM.YYYY");
                            // }
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
    },
    mounted() {
        this.fetchTwelveMongth();
    },
    methods: {
        async fetchTwelveMongth() {
            try {
                const res = await axios.get("api/month");
                const data = await res.data;
                const { twelveMonth } = data;

                let fetchedTwelveMongth = twelveMonth.slice();  

                this.series = [{
                    data: fetchedTwelveMongth
                }]
            } catch (error) {
                throw error;
            }
        }
    },
};
</script>

<style lang="scss"></style>
