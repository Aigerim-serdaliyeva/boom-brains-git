<template>
    <SubPage :title="$t('widget.month')">
        <NoDataChart v-if="!dataResponse" />
        <div v-else>
            <div class="months">
                <div class="month">
                    <div
                        v-for="item in months"
                        :key="item.id"
                        @click="currentComponent = item.target"
                        :class="[
                            'month__button',
                            { active: currentComponent === item.target }
                        ]"
                    >
                        {{ item.button }}
                    </div>
                </div>
                <transition name="page" mode="out-in">
                    <div class="months__content">
                        <component :is="currentComponent" />
                    </div>
                </transition>
            </div>
            <div class="d-flex justify-content-between">
                <div class="apexchart__text">
                    {{ $t("month.text1") }} <span>{{ dataResponse.prevTotal }}</span>
                </div>
                <div class="apexchart__text">
                    {{ $t("month.text2") }} <span>{{ dataResponse.currentTotal }}</span>
                </div>
            </div>
        </div>
    </SubPage>
</template>

<script>
import NoDataChart from '../../../components/NoDataChart.vue'
import TwelveMonth from "./TwelveMonth.vue";
import SixMonth from "./SixMonth.vue";
import OneMonth from "./OneMonth.vue";
import SubPage from "../../../components/sub-page/SubPage.vue";
import VueApexCharts from "vue-apexcharts";
import axios from 'axios';

export default {
    data() {
        return {
            dataResponse: {
                currentMonth: null,
                currentTotal: null,
                prevTotal: null,
            },
            currentComponent: "OneMonth",
            activetab: 0,
            months: [
                {
                    id: 1,
                    button: this.$t("month.button.one"),
                    target: "OneMonth"
                },
                {
                    id: 2,
                    button: this.$t("month.button.six"),
                    target: "SixMonth"
                },
                {
                    id: 3,
                    button: this.$t("month.button.twelve"),
                    target: "TwelveMonth"
                }
            ]
        };
    },
    components: {
        SubPage,
        apexchart: VueApexCharts,
        OneMonth,
        SixMonth,
        TwelveMonth, 
        NoDataChart
    }, 
    mounted() {
        this.fetchCurrentMongth();
    },
    methods: {
        async fetchCurrentMongth() {
            try {
                const res = await axios.get("api/month");
                const data = await res.data;
                const { currentMonth, prevTotal, currentTotal } = data;

                if(!data) {
                    this.dataResponse = false
                    return
                }
                this.dataResponse.currentMonth = currentMonth;
                this.dataResponse.prevTotal = prevTotal;
                this.dataResponse.currentTotal = currentTotal;
            } catch (error) {
                throw error;
            }
        }
    },
};
</script>

<style lang="scss">
.month {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    font-size: 13px;
    margin-bottom: 10px;
    &__chart {
        height: 450px;
        margin-bottom: 20px;
    }
    &__button {
        padding: 6px 5px;
        border-radius: 33px;
        text-align: center;
        width: 110px;
        cursor: pointer;
        &:hover,
        &.active {
            background: #fff;
        }
    }
}
.apexcharts {
    position: relative;
    &-xaxis-label {
        font-size: 11px;
    }
    &-tooltip {
        background: #E5E5E5;
        color: #427eb9;
    }
}

@media screen and (max-width: 1370px) {
    .month {
        &__chart {
            height: 400px;
        }
    }
}

@media screen and (max-width: 1200px) {
    .month {
        &__chart {
            height: 350px;
            margin-bottom: 15px;
        }
    }
}
</style>
