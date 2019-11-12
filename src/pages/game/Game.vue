<template>
    <div class="game__section">
        <div>
            <transition name="page" mode="out-in">
                <CurrentComponent />
            </transition>
        </div>
        <div class="row game__content" v-if="records.length">
            <div
                class="col-lg-4 col-6"
                v-for="(game, index) in records"
                :key="game._id"
            >
                <div
                    class="game"
                    @click="selectComponent(game.gameName, index)"
                >
                    <div class="game__data">
                        <h4 class="game__name">{{ game.name }}</h4>
                        <div class="game__record">
                            <img
                                src="@/assets/img/game/record-white.png"
                            />{{ $t("record") }}: {{ game.record }}
                        </div>
                    </div>
                    <div class="game__img">
                        <img :src="games[index].url" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CurrentComponent from './CurrentComponent.vue'
import { async } from "q";
import axios from "axios";
import {mapGetters, mapActions} from "vuex"

export default {
    components: {
        CurrentComponent
    },
    data() {
        return {
            records: [],
            games: [
                {
                    url: require("@/assets/img/game/game-1.png")
                },
                {
                    url: require("@/assets/img/game/game-2.png")
                },
                {
                    url: require("@/assets/img/game/game-3.png")
                },
                {
                    url: require("@/assets/img/game/game-4.png")
                },
                {
                    url: require("@/assets/img/game/game-5.png")
                },
                {
                    url: require("@/assets/img/game/game-6.png")
                },
                {
                    url: require("@/assets/img/game/game-7.png")
                },
                {
                    url: require("@/assets/img/game/game-8.png")
                },
                {
                    url: require("@/assets/img/game/game-9.png")
                },
                {
                    url: require("@/assets/img/game/game-9.png")
                }
            ]
        };
    },
    mounted() {
        this.fetchRecords();
    },
    computed: {
        ...mapGetters({
            game: "gamesList/game",
            index: "gamesList/index"
        })
    },
    methods: {
        async fetchRecords() {
            try {
                const res = await axios.get("api/games-list");
                const data = await res.data;
                const { records } = data;
                this.records = records;
            } catch (error) {
                throw error;
            }
        },
        ...mapActions({
            fetchInfo: "gamesList/fetchInfo",
            changeIndex: "gamesList/changeIndex"
        }),
        selectComponent(gameName, index) {
            this.fetchInfo(gameName);
            this.changeIndex(index);
        }
    }
};
</script>

<style lang="scss">
.game {
    margin-bottom: 15px;
    background: #f1f1f1;
    position: relative;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover,
    &.active {
        transform: scale(1.04, 1.04);
    }
    &__section {
        margin: 15px 30px;
    }
    &__content {
        margin-top: 5px;
        background: #f1f1f1;
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
