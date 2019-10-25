<template>
    <div class="game__section">
        <!-- <Loading :spinnerSettings="spinnerSettings"> -->
            <div class="row">
                <component :is="currentComponent"></component>
            </div>
            <div class="row game__content">
                <div class="col-lg-4 col-6"
                     v-for="(game, index) in games"
                    :key="index" 
                >
                    <div class="game"
                        @click="currentComponent=game.target" 
                    >
                        <div class="game__data">
                            <h4 class="game__name">{{game.name}}</h4>
                            <div class="game__record"><img src="@/assets/img/game/record-white.png" alt="">Рекорд:</div>
                        </div>
                        <div class="game__img">
                            <img :src="game.url" >
                        </div>
                    </div>
                </div>
            </div>
        <!-- </Loading> -->
    </div>
</template>

<script>
import Equation from './Equation.vue'
import Calculate from './Calculate.vue'
import FindNumber from './FindNumber.vue'
import RememberNumber from './RememberNumber.vue'
import TableSchulte from './TableSchulte.vue'
import Loading from '../../components/loading/Loading.vue'

export default {
    components: { Loading, TableSchulte, RememberNumber, FindNumber, Calculate, Equation },
    data() {
        return {  
            currentComponent: "", 
            // currentComponent: "TableSchulte", 
            games: [
                {url: require("@/assets/img/game/game-1.jpg"), name: "Таблица шульте", target: "TableSchulte"},
                {url: require("@/assets/img/game/game-2.jpg"), name: "Запомни число", target: "RememberNumber"},
                {url: require("@/assets/img/game/game-3.jpg"), name: "Найди число", target: "FindNumber"},
                {url: require("@/assets/img/game/game-4.jpg"), name: "", target: "Calculate"},
                {url: require("@/assets/img/game/game-5.jpg"), name: "", target: "Equation"},
                {url: require("@/assets/img/game/game-6.jpg"), name: "", target: ""},
                {url: require("@/assets/img/game/game-7.jpg"), name: "", target: ""},
                {url: require("@/assets/img/game/game-8.jpg"), name: "", target: ""},
                {url: require("@/assets/img/game/game-9.jpg"), name: "", target: ""},
            ],         
            // spinnerSettings: {
            //     spinnerColor: '#bada55',
            //     loading: false,
            //     size: 20                
            // }
        };
    }
};
</script>

<style lang="scss">
    .game {
        margin-bottom: 15px;            
        background: #F1F1F1;
        position: relative;          
        cursor: pointer;
        &__section {
            margin: 15px 30px;
        }
        &__content {
            margin-top: 5px;
            background: #F1F1F1;
            border-radius: 8px;
            padding: 30px 24px;
        }
        &__img {
            img {
                border-radius: 10px;
                overflow: hidden; 
            }
        }
        &__data {
            position: absolute;
            color: #fff;
            margin-left: 20px;
            top: 50%;
            transform: translateY(-50%);
        }
        &__name {
            font-weight: bold;
            font-size: 18px;
            margin-bottom: 15px;
        }
        &__record {
            font-weight: normal;
            font-size: 13px;
            img {
                margin-right: 5px;
            }
        }
    }
</style>
