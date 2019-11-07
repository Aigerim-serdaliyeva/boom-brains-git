<template>
    <SubPage :title="$t('widget.age')"> 
        <div class="age__chart">
            <apexchart 
                type=bar 
                height="100%"
                :options="chartOptions" 
                :series="series" 
            />
        </div>
        <div class="apexchart__text">{{ $t('age.text1') }}</div>   
    </SubPage>
</template>

<script>
import SubPage from "../../components/sub-page/SubPage.vue";
import VueApexCharts from "vue-apexcharts";
export default {
    data() {
        return {               
            series: [{
                name: 'series-1',
                data: [44, 55, 41, 75, 22, 43, 21, 33]
            }],        
            chartOptions: {
                dataLabels: {
                    enabled: false,
                },
                tooltip: {
                    enabled: false
                },
                chart: {
                    // id: 'basic-bar'
                },
                xaxis: {
                    categories: [
                        this.$tc('year', '10-15'),
                        this.$tc('year', '15-20'),
                        this.$tc('year', '20-25'),
                        this.$tc('year', '30-35'),
                        this.$tc('year', '40-45'),
                        this.$tc('year', '50-55'),
                        this.$tc('year', '60-65'),
                        this.$tc('year', '70-75+')
                    ]
                },
                yaxis: {
                    show: true,
                    showAlways: true,
                    line: true,
                    axisBorder: {
                        show: true,
                        color: "#888888"
                    },
                    axisTicks: {
                        show: true,
                    }
                },
                fill: {
                   colors: ['#12ACCE', '#1989A1']
                }
            },
        }
    },
    components: {
        SubPage,
        apexchart: VueApexCharts
    },
    i18n: {
        messages: {
            ru: {
                age: {
                    text1: "По нашим данным наибольшая активность мозга проявляется в возрасте от 17 до 35 лет. Существую “люди исключения” с достаточными тренировками мозговой деятельности некоторые люди поддерживают его активность в хорошей форме даже до 50-60 лет.",
                }
            }
        }
    }
};
</script>

<style lang="scss">

    .age__chart {
        height: 350px;
    }

</style>
