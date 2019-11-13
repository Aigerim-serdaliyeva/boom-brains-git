<template>
    <div class="rating" v-if="records.length">
        <ul class="rating__ul">
            <li class="rating__list" v-for="player in records" :key="player.position" :class="{ active: player.username === userName }">
                <span>{{ player.position }}. {{ player.username }}</span>
                <span>{{ player.totalRecord }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

import SubPage from "../../components/sub-page/SubPage.vue";
export default {
    components: { SubPage },
    data() {
        return {
            records: [],
            userName: ""
        };
    },
    mounted() {
        this.fetchWorldRating();
        this.fetchInfo();            
    },
    methods: {        
        async fetchInfo() {
            try {
                const res = await axios.get("auth/user-info");
                const data = await res.data;
                const { username } = data;

                this.userName = username;
            } catch (error) {
                throw error;
            }
        },
        async fetchWorldRating() {
            try {
                const res = await axios.get("api/friend-record");
                const data = await res.data;
                const { records } = data;
                this.records = records;
            } catch (error) {
                throw error;
            }
        }
    }
};
</script>

<style lang="scss">
    
</style>
