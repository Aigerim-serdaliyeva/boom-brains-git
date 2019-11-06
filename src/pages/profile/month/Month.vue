<template>
    <SubPage title="Прогресс за месяц"> 
        <div class="months">
          <div class="month">
            <div 
              v-for="(item) in months" :key="item.id"
              @click="currentComponent=item.target" 
              :class="['month__button', { active: currentComponent === item.target }]"
            >{{ item.button }}</div>
          </div>
          <transition name="page" mode="out-in">
            <div class="months__content">
              <component :is="currentComponent" />
            </div>
          </transition>
        </div>
        <div class="d-flex justify-content-between">
            <div class="apexchart__text">{{ $t('month.text1') }} <span>74999</span></div>
            <div class="apexchart__text">{{ $t('month.text2') }} <span>4999</span></div>
        </div>
    </SubPage>
</template>

<script>
import TwelveMonth from './TwelveMonth.vue'
import SixMonth from './SixMonth.vue'
import OneMonth from './OneMonth.vue';
import SubPage from '../../../components/sub-page/SubPage.vue'
import VueApexCharts from "vue-apexcharts";

export default {    
  data() {
    return {
      currentComponent: "OneMonth",
      activetab: 0,
      months: [
        {id:1, button: "1 Месяц", target: "OneMonth"},
        {id:2, button: "6 Месяцев", target: "SixMonth"},
        {id:3, button: "12 Месяцев", target: "TwelveMonth"}
      ]
    }
  },
  components: { 
    SubPage,        
    apexchart: VueApexCharts, 
    OneMonth, SixMonth, TwelveMonth
  },
  i18n: {
    messages: {
      ru: {
        month: {
          text1: "Количество очков за прошлый месяц:",
          text2: "Количество очков за этот месяц:"
        }
      }
    }
  }
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
            padding: 6px 17px;
            border-radius: 33px;
            cursor: pointer;
            &.active {
                background: #fff;
            }
        }
    }
    .apexcharts {
        position: relative;
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


                    