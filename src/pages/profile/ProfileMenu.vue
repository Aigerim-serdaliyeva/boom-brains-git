<template>
    <div>
        <Grid>
            <Widget title="Недельная активность" :style="{'top': '0', 'left': '0', 'height': '33.33%', 'width': '25%'}">
                <router-link to="/profile/week">    
                    <img src="@/assets/img/week.png" alt="">
                </router-link>
            </Widget>
            <Widget title="Прогресс за месяц" :style="{'top': '0', 'left': '25%', 'height': '33.33%', 'width': '25%'}">
                <router-link to="/profile/month">    
                    <img src="@/assets/img/month.jpg" alt="">
                </router-link>
            </Widget>
            <Widget title="Данные по играм" :style="{'top': '0', 'left': '50%', 'height': '33.33%', 'width': '25%'}">
                <router-link to="/profile/game-data"> 
                    <img src="@/assets/img/game-data.jpg" alt="">       
                </router-link>
            </Widget>
            <Widget title="Рейтинг среди друзей" :style="{'top': '0', 'left': '75%', 'height': '50%', 'width': '25%'}">
                <router-link to="/profile/rating-friends">  
                text       
                </router-link>
            </Widget>
            <Widget :style="{'top': '33.33%', 'left': '0', 'height': '66.66%', 'width': '50%'}">
                <Radar />   
                <!-- <router-link to="/profile/radar">  
                    <Radar />                
                </router-link> -->
            </Widget>
            <Widget title="Возрастная статистика" :style="{'top': '33.33%', 'left': '50%', 'height': '33.33%', 'width': '25%'}">
                <router-link to="/profile/age">   
                    <img src="@/assets/img/age.jpg" alt="">    
                </router-link>
            </Widget>
            <Widget title="Рекорды" :style="{'top': '66.66%', 'left': '50%', 'height': '33.33%', 'width': '25%'}">
                <Records />
                <!-- <router-link to="/profile/records">  
                text       
                </router-link> -->
            </Widget>
            <Widget title="Мировой рейтинг" :style="{'top': '50%', 'left': '75%', 'height': '50%', 'width': '25%'}">
                <router-link to="/profile/rating-world">   
                text      
                </router-link>
            </Widget>      
        </Grid>
    </div>
</template>

<script>
import Records from './Records.vue'
import Radar from './Radar.vue'
import Grid from '../../components/grid/Grid.vue'
import Widget from "../../components/widget/Widget";
export default {
    components: {
        Widget, Grid, Radar, Records
    }
};
</script>

<style lang="scss">
    // .back-link {
    //     display: none;
    // }
    // .sub-page {
    //     &__title {
    //         display: none;
    //     }
    // }
</style>
