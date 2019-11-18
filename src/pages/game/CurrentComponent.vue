<template>
    <div v-if="game" class="container">
        <div class="row align-items-center">
            <div class="col-md-3" >
                <img :src="games[index].url1" />
            </div>
            <div class="col-md-9">
                <div class="row align-items-center game-widget__content">
                    <div class="col-lg-4 col-md-3 align-items-center justify-content-center d-flex">                        
                    <img :src="games[index].url2" />
                    </div>
                    <div class="col-lg-8 col-md-9">
                        <GameWidget :title="gameName" :youRecord="record" :worldRecord="worldRecords[0].record">
                            <template v-slot:rules>
                                <p class="game-widget__block__text">
                                    {{games[index].text}}
                                </p>
                            </template>                            
                        </GameWidget>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GameWidget from "./GameWidget.vue";
import axios from "axios";
import {mapGetters} from "vuex"

export default {
    components: { GameWidget },
    data() {
        return {
            games: [
                {   
                    url1: require("@/assets/img/game/game-1-1.png"),
                    url2: require("@/assets/img/game/game-1-2.png"),
                    text: this.$t("textShulteTable")
                },
                {
                    url1: require("@/assets/img/game/game-2-1.png"),
                    url2: require("@/assets/img/game/game-2-2.png"),
                    text: this.$t("textRememberNumber")
                },
                {
                    url1: require("@/assets/img/game/game-3-1.png"),
                    url2: require("@/assets/img/game/game-3-2.png"),
                    text: this.$t("textFindNumber")
                },
                {
                    url1: require("@/assets/img/game/game-4-1.png"),
                    url2: require("@/assets/img/game/game-4-2.png"),
                    text: this.$t("textCalculation")
                },
                {
                    url1: require("@/assets/img/game/game-5-1.png"),
                    url2: require("@/assets/img/game/game-5-2.png"),
                    text: this.$t("textEquation")
                },
                {
                    url1: require("@/assets/img/game/game-6-1.png"),
                    url2: require("@/assets/img/game/game-6-2.png"),
                    text: this.$t("textShulteLetters")
                },
                {
                    url1: require("@/assets/img/game/game-7-1.png"),
                    url2: require("@/assets/img/game/game-7-2.png"),
                    text: this.$t("textRememberWords")
                },
                {
                    url1: require("@/assets/img/game/game-7-1.png"),
                    url2: require("@/assets/img/game/game-7-2.png"),
                    text: this.$t("textMemorySquare")
                },
                {
                    url1: require("@/assets/img/game/game-7-1.png"),
                    url2: require("@/assets/img/game/game-7-2.png"),
                    text: this.$t("textColoredFigures")
                },
                {
                    url1: require("@/assets/img/game/game-7-1.png"),
                    url2: require("@/assets/img/game/game-7-2.png"),
                    text: this.$t("textColoredWords")
                },
            ]
        };
    },
    computed: {
      ...mapGetters({
          game: "gamesList/game",
          gameName: "gamesList/gameName",
          index: "gamesList/index",
          record: "gamesList/record",
          worldRecords: "gamesList/worldRecords",
      })
    },
    i18n: {
        messages: {
            ru: {
                textShulteTable: "Нажимайте на числа по их возрастанию, в зависимости от уровня количество ячеек будет увиличиваться. Ошибкой будет нажатие цифры которая не стоит следующей в очереди. Правильные нажатия помечаются - зеленым цветом, а ложные - красным. Будьте внимательны и старайтесь концентрировать взгляд на центре таблицы.",
                textRememberNumber: "русский",
                textFindNumber: "русский",
                textCalculation: "русский",
                textEquation: "русский",
                textShulteLetters: "русский",
                textRememberWords: "русский",
                textMemorySquare: "русский",
                textColoredFigures: "русский",
                textColoredWords: "русский"
            },
            en: {
                textShulteTable: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, mollitia!",
                textRememberNumber: "english",
                textFindNumber: "english",
                textCalculation: "english",
                textEquation: "english",
                textShulteLetters: "english",
                textRememberWords: "english",
                textMemorySquare: "english",
                textColoredFigures: "english",
                textColoredWords: "english"
            },
            kz: {
                textShulteTable: "Сандарды өсу ретімен басыңыз, деңгейге байланысты ұяшықтар саны көбейеді. Өсу ретімен тұрмаған санды басу қате болып саналады. Дұрыс шертулер жасыл, ал жалған шерту қызыл түспен белгіленген. Абай болыңыз және кестенің ортасына назар аударыңыз.",
                textRememberNumber: "kazak",
                textFindNumber: "kazak",
                textCalculation: "kazak",
                textEquation: "kazak",
                textShulteLetters: "kazak",
                textRememberWords: "kazak",
                textMemorySquare: "kazak",
                textColoredFigures: "kazak",
                textColoredWords: "kazak"
            }
        }
    }
};
</script>

<style lang="scss">
.game-widget__content {
    height: 100%;
}
</style>
