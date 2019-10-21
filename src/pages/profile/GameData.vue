<template>
    <SubPage title="Данные по играм"> 
        <apexchart
            type="donut"
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
    components: { 
        SubPage, 
        apexchart: VueApexCharts,
    },
    data() {
        return {
            series: [65, 55, 41, 17, 15],
            chartOptions: {
                labels: ['Таблица шульте', 'Запомни число', 'Найди число', 'Вычисли', 'Определи знак'],
                fill: {
                    colors: ['#F63871', '#FD9300', '#5ACC02', '#11ADCF', '#5D17BF', '#FDDF76']
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                    }
                }]
            }
        }
    }
};
</script>

<style lang="scss">

    .apexcharts-canvas {
        
    }

</style>
