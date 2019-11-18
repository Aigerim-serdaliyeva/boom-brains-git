<template>
    <div class="rating" v-if="records.length">
        <ul class="rating__world rating__ul">
            <li class="rating__list" v-for="player in records" :key="player.position" :class="{ active: player.username === userName }">
                <span>{{ player.position }}. {{ player.username }}</span>
                <span>{{ player.totalRecord }}</span>
            </li>
        </ul>

        <ul class="rating__player">
            <li>
                <span>{{ myRecord.position }}. {{ myRecord.username }}</span>
                <span>{{ myRecord.totalRecord }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
    components: {},
    data() {
        return {
            records: [],
            myRecord: {},
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
                const res = await axios.get("api/world-record");
                const data = await res.data;
                const { records, myRecord } = data;
                this.records = records;
                this.myRecord = myRecord;
            } catch (error) {
                throw error;
            }
        }
    }
};
</script>

<style lang="scss">
.rating {
    height: 100%;
    &__list {
        display: flex;
        justify-content: space-between;
        font-weight: 300;
        font-size: 13px;
        &.active {
            font-weight: bold;
        }
    }
    &__ul {
        overflow-y: auto;
    }
    &__world {
        height: 85%;
        // overflow-y: auto;
        margin-bottom: 10px;       
        overflow: hidden; 
    }
    &__player {
        li {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            font-size: 13px;
        }
    }
}
</style>
