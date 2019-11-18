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
                    </div>
                </router-link>
            </Widget>
            <Widget
                :title="$t('widget.ratingfriends')"
                :style="{ top: '0', left: '75%', height: '50%', width: '25%' }"
            >
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
    }
};
</script>

<style lang="scss"></style>
