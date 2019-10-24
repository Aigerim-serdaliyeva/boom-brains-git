<template>
    <div class="main--2">
        <!-- <Loading :spinnerSettings="spinnerSettings"> -->
            <div class="row">
                <component :is="currentComponent"></component>
            </div>
            <div class="row game__content">
                <div class="col-xl-3 col-lg-4 col-6"
                     v-for="(image, index) in games"
                    :key="index" 
                >
                    <div class="game__img">
                        <img                             
                            @click="currentComponent=image.target" 
                            :src="image.url"
                        >
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
            currentComponent: "TableSchulte", 
            games: [
                {url: require("@/assets/img/game/game-1.jpg"), target: "TableSchulte"},
                {url: require("@/assets/img/game/game-2.jpg"), target: "RememberNumber"},
                {url: require("@/assets/img/game/game-3.jpg"), target: "FindNumber"},
                {url: require("@/assets/img/game/game-4.jpg"), target: "Calculate"},
                {url: require("@/assets/img/game/game-5.jpg"), target: "Equation"},
                {url: require("@/assets/img/game/game-6.jpg"), target: ""},
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
        &__content {
            margin-top: 5px;
            background: #F1F1F1;
            border-radius: 8px;
            padding: 30px 55px;
        }
        &__img {
            margin-bottom: 10px;
            img {
                border-radius: 8px;
                overflow: hidden;                
                background: #5380B7;
                cursor: pointer;
            }
        }
    }
</style>
