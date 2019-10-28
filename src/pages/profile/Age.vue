<template>
    <SubPage title="Возрастная статистика"> 
        <apexchart 
            type=bar 
            max-height=350 
            :options="chartOptions" 
            :series="series" 
        />
        <div class="apexchart__text">По нашим данным наибольшая активность мозга проявляется в возрасте от 17 до 35 лет. 
            Существую “люди исключения” с достаточными тренировками мозговой деятельности некоторые люди поддерживают его активность в хорошей форме даже до 50-60 лет.</div>   
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
                chart: {
                    // id: 'basic-bar'
                },
                xaxis: {
                    categories: [
                        '10-15 лет',
                        '15-20 лет',
                        '20-25 лет',
                        '30-35 лет',
                        '40-45 лет',
                        '50-55 лет',
                        '60-65 лет',
                        '70-75+ лет'
                    ],
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
        apexchart: VueApexCharts,
    }
};
</script>

<style lang="scss"></style>
