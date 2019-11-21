<template>
    <div v-if="game" class="container">
        <div class="row ">
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
                    text: this.$t("game.textShulteTable")
                },
                {
                    url1: require("@/assets/img/game/game-2-1.png"),
                    url2: require("@/assets/img/game/game-2-2.png"),
                    text: this.$t("game.textRememberNumber")
                },
                {
                    url1: require("@/assets/img/game/game-3-1.png"),
                    url2: require("@/assets/img/game/game-3-2.png"),
                    text: this.$t("game.textFindNumber")
                },
                {
                    url1: require("@/assets/img/game/game-4-1.png"),
                    url2: require("@/assets/img/game/game-4-2.png"),
                    text: this.$t("game.textCalculation")
                },
                {
                    url1: require("@/assets/img/game/game-5-1.png"),
                    url2: require("@/assets/img/game/game-5-2.png"),
                    text: this.$t("game.textEquation")
                },
                {
                    url1: require("@/assets/img/game/game-6-1.png"),
                    url2: require("@/assets/img/game/game-6-2.png"),
                    text: this.$t("game.textShulteLetters")
                },
                {
                    url1: require("@/assets/img/game/game-7-1.png"),
                    url2: require("@/assets/img/game/game-7-2.png"),
                    text: this.$t("game.textRememberWords")
                },
                {
                    url1: require("@/assets/img/game/game-7-1.png"),
                    url2: require("@/assets/img/game/game-7-2.png"),
                    text: this.$t("game.textMemorySquare")
                },
                {
                    url1: require("@/assets/img/game/game-7-1.png"),
                    url2: require("@/assets/img/game/game-7-2.png"),
                    text: this.$t("game.textColoredFigures")
                },
                {
                    url1: require("@/assets/img/game/game-7-1.png"),
                    url2: require("@/assets/img/game/game-7-2.png"),
                    text: this.$t("game.textColoredWords")
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
    }
};
</script>

<style lang="scss">
.game-widget__content {
    height: 100%;
}
</style>
