<template>
    <div>
        <Grid>
            <Widget
                :title="$t('widget.week')"
                :style="{ top: '0', left: '0', height: '33.33%', width: '25%' }"
            >
                <router-link to="/profile/week">
                    <div class="widget__img">
                        <WeekMin />
                        <!-- <img src="@/assets/img/week.png" alt="" /> -->
                    </div>
                </router-link>
            </Widget>
            <Widget
                :title="$t('widget.month')"
                :style="{
                    top: '0',
                    left: '25%',
                    height: '33.33%',
                    width: '25%'
                }"
            >
                <router-link to="/profile/month">
                    <div class="widget__img">
                        <MonthMin />
                        <!-- <img src="@/assets/img/month.png" alt="" /> -->
                    </div>
                </router-link>
            </Widget>
            <Widget
                :title="$t('widget.gamedata')"
                :style="{
                    top: '0',
                    left: '50%',
                    height: '33.33%',
                    width: '25%'
                }"
            >
                <router-link to="/profile/game-data">
                    <div class="widget__img">
                        <GameDataMin />
                        <!-- <img src="@/assets/img/game-data.png" alt="" /> -->
                    </div>
                </router-link>
            </Widget>
            <Widget
                :title="$t('widget.ratingfriends')"
                :style="{ top: '0', left: '75%', height: '50%', width: '25%' }"
            >
                <!-- <router-link to="/profile/rating-friends">
                    text
                </router-link> -->
                <RatingFriends />
            </Widget>
            <Widget
                :style="{
                    top: '33.33%',
                    left: '0',
                    height: '66.66%',
                    width: '50%'
                }"
            >
                <Radar />
                <!-- <router-link to="/profile/radar">  
                    <Radar />                
                </router-link> -->
            </Widget>
            <Widget
                :title="$t('widget.age')"
                :style="{
                    top: '33.33%',
                    left: '50%',
                    height: '33.33%',
                    width: '25%'
                }"
            >
                <router-link to="/profile/age">
                    <div class="widget__img">
                        <AgeMin />
                        <!-- <img src="@/assets/img/age.png" alt="" /> -->
                    </div>
                </router-link>
            </Widget>
            <Widget
                :title="$t('widget.records')"
                :style="{
                    top: '66.66%',
                    left: '50%',
                    height: '33.33%',
                    width: '25%'
                }"
            >
                <Records />
                <!-- <router-link to="/profile/records">  
                text       
                </router-link> -->
            </Widget>
            <Widget
                :title="$t('widget.ratingworld')"
                :style="{
                    top: '50%',
                    left: '75%',
                    height: '50%',
                    width: '25%'
                }"
            >
                <!-- <router-link to="/profile/rating-world">
                    text
                </router-link> -->
                <RatingWorld />
            </Widget>
        </Grid>
    </div>
</template>

<script>
import GameDataMin from './game-data/GameDataMin.vue'
import AgeMin from './age/AgeMin.vue'
import MonthMin from './month/MonthMin.vue'
import WeekMin from './week/WeekMin.vue'
import RatingFriends from "./RatingFriends.vue";
import RatingWorld from "./RatingWorld.vue";
import Records from "./Records.vue";
import Radar from "./Radar.vue";
import Grid from "../../components/grid/Grid.vue";
import Widget from "../../components/widget/Widget";
export default {
    components: {
        Widget,
        Grid,
        Radar,
        Records,
        RatingWorld,
        RatingFriends, WeekMin, MonthMin, AgeMin, GameDataMin
    },
    i18n: {
        messages: {
            ru: {},
            en: {}
        }
    }
};
</script>

<style lang="scss"></style>
