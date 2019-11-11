<template>
    <div class="rating" v-if="records.length">
        <ul class="rating__world">
            <li v-for="player in records" :key="player.position">
                <span>{{ player.position }}. {{ player.username }}</span>
                <span>{{ player.totalRecord }}</span>
            </li>
        </ul>

        <ul class="rating__player">
            <!-- <li><span>{{ myRecord.position }}. {{ myRecord.username }}</span> <span>{{ myRecord.totalRecord }}</span></li> -->
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
            records: []
        };
    },
    mounted() {
        this.fetchWorldRating();
    },
    methods: {
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

<style lang="scss"></style>
