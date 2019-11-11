<template> 
    <div class="game__section">
        <!-- <Loading :spinnerSettings="spinnerSettings"> -->
            <div class="row">
                <transition name="page" mode="out-in">
                    <component :is="currentComponent"></component>
                </transition>                    
            </div>
            <div class="row game__content" v-if="records.length">                
                <div class="col-lg-4 col-6"
                    v-for="(game, index) in records"
                    :key="game._id" 
                >
                    <div class="game"
                        @click="currentComponent=games[index].target" 
                    >
                        <div class="game__data">
                            <h4 class="game__name">{{game.name}}</h4>
                            <div class="game__record"><img src="@/assets/img/game/record-white.png" alt="">{{ $t('record') }}: {{ game.record }}</div>
                        </div>
                        <div class="game__img">
                            <img :src="games[index].url" >
                        </div>
                    </div>
                </div>                
            </div>
        <!-- </Loading> -->
    </div>
</template>

<script>
import ColoredWords from './ColoredWords.vue'
import ColoredFigures from './ColoredFigures.vue'
import MemorySquare from './MemorySquare.vue'
import RememberWords from './RememberWords.vue'
import ShulteLetters from './ShulteLetters.vue'
import Equation from './Equation.vue'
import Calculate from './Calculate.vue'
import FindNumber from './FindNumber.vue'
import RememberNumber from './RememberNumber.vue'
import TableSchulte from './TableSchulte.vue'
import Loading from '../../components/loading/Loading.vue'
import { async } from 'q'
import axios from "axios"

export default {
    components: { Loading, TableSchulte, RememberNumber, FindNumber, Calculate, Equation, ShulteLetters, RememberWords, MemorySquare, ColoredFigures, ColoredWords },
    data() {
        return {  
            currentComponent: "", 
            games: [
                {url: require("@/assets/img/game/game-1.jpg"), target: "TableSchulte"},
                {url: require("@/assets/img/game/game-2.jpg"), target: "RememberNumber"},
                {url: require("@/assets/img/game/game-3.jpg"), target: "FindNumber"},
                {url: require("@/assets/img/game/game-4.jpg"), target: "Calculate"},
                {url: require("@/assets/img/game/game-5.jpg"), target: "Equation"},
                {url: require("@/assets/img/game/game-6.jpg"), target: "ShulteLetters"},
                {url: require("@/assets/img/game/game-7.jpg"), target: "RememberWords"},
                {url: require("@/assets/img/game/game-8.jpg"), target: "MemorySquare"},
                {url: require("@/assets/img/game/game-9.jpg"), target: "ColoredFigures"},
                {url: require("@/assets/img/game/game-9.jpg"), target: "ColoredWords"}
            ], 
            records: []        
            // spinnerSettings: {
            //     spinnerColor: '#bada55',
            //     loading: false,
            //     size: 20                
            // }
        };
    },
    mounted() {
        this.fetchRecords()
    },
    methods: {
        async fetchRecords() {
            try {
                const res = await axios.get("api/games-list")
                const data = await res.data
                const {records} = data
                this.records = records
            }
            catch(error) {
                throw error
            }
        }
    }
};
</script>

<style lang="scss">
    .game {
        margin-bottom: 15px;            
        background: #F1F1F1;
        position: relative;          
        cursor: pointer;
        transition: all .5s ease;
        &:hover, &.active {
            transform: scale(1.04, 1.04);
        }
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

    @media screen and (max-width: 1370px) {
        .game {
            &__section {
                margin: 5px 10px;
            }
            &__content {
                padding: 20px 15px;
            }
        }
    } 
</style>
