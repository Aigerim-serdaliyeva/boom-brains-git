<template>
    <apexchart
        type="bar"
        :options="chartOptions"
        :series="series"
        height="100%"
    >
    </apexchart>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import axios from "axios";

export default {
    data() {
        return {
            series: [
                {
                    data: [128, 30]
                }
            ],
            chartOptions: {
                dataLabels: {
                    enabled: true,
                    orientation: 'vertical',
                    rotateAlways: true,
                    textAnchor: 'middle',
                    trim: true,
                    formatter: function(minutes) {
                        if (minutes === 1 || minutes === 0) {
                            return
                        }

                        var dHours = Math.floor(minutes / 60);
                        var dMinutes = minutes % 60;
                        var time = "";

                        if (dHours > 0) {
                            time += dHours + " час ";
                        } 
                        if (dHours > 0 && dMinutes > 0) {
                            time = dHours + 'час ' + dMinutes + "мин";
                        }    
                        if (time === "") {
                            time = minutes + '\nмин';
                        }
                        return time;
                        // return time.replace('\n','<br/>');
                    },
                    style: {
                        fontSize: '14px',
                        color: "#fff",
                        whiteSpace: 'pre' 
                    },
                    // offsetX: 0,
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
                    categories: [this.$t("week.last"), this.$t("week.this")],
                    labels: {
                        show: true,
                        trim: false,
                        rotate: -45,
                        // rotateAlways: true,
                        // hideOverlappingLabels: true,
                        floating: true,
                        style: {
                            whiteSpace: "normal"
                        }
                    }
                },
                yaxis: {
                    tickAmount: 6
                }
            }
        };
    },
    mounted() {
        this.fetchWeek();
    },
    methods: {
        async fetchWeek() {
            try {
                const res = await axios.get("api/week");
                const data = await res.data;
                const { prev, cur } = data;

                let fetchedPrev = prev ? prev.total : 0;              
                let fetchedCurrent = cur ? cur.total : 0;           

                this.series = [{
                    data: [fetchedPrev, fetchedCurrent]
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
.apexcharts {
    &-xaxis-label {
    }
}

@media screen and (max-width: 1370px) {
    .apexcharts {
    }
}
</style>
