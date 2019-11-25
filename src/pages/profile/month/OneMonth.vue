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
import axios from 'axios';

export default {
    data() {
        const $this = this;
        return {   
            dataLength: null,
            series: [
                {
                    name: '',
                    data: [
                        // ["05/06/2019", 34],
                    ]
                }
            ],
            options: {
                chart: {
                    // height: 'auto'
                    // height: '100%'
                },
                dataLabels: {
                    enabled: false
                },
                tooltip: {
                    // enabled: true,
                    // shared: true,
                    // followCursor: false,
                    // intersect: false,
                    // inverseOrder: true,
                    // custom: undefined,
                    // theme: false,       
                    custom: function({series, seriesIndex, dataPointIndex, w}) {
                        return '<div class="arrow_box">' +
                            '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
                            '</div>'
                    }             
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
                    tickAmount: 29,
                    labels: {
                        show: true,
                        rotate: -45,
                        rotateAlways: true,
                        hideOverlappingLabels: true,
                        showDuplicates: false,
                        trim: false,
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
                    // decimalsInFloat: undefined,
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
    mounted() {
        this.fetchCurrentMongth();
    },
    methods: {
        async fetchCurrentMongth() {
            try {
                const res = await axios.get("api/month");
                const data = await res.data;
                const { currentMonth } = data;

                if(!currentMonth) {
                    return
                }

                let fetchedCurrentMongth = currentMonth.slice();  
                console.log(fetchedCurrentMongth)
                let dataLength = currentMonth.length;
                this.dataLength = dataLength - 1;

                this.series = [{
                    data: fetchedCurrentMongth
                }]
            } catch (error) {
                throw error;
            }
        }
    },
    components: {
        apexchart: VueApexCharts
    }
};
</script>

<style lang="scss">
</style>
