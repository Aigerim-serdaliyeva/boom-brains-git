<template>
    <div class="rating" v-if="records.length">
        <ul class="rating__world">
            <li v-for="player in records" :key="player.position">
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
            myRecord: {}
        };
    },
    mounted() {
        this.fetchWorldRating();
    },
    methods: {
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
    &__world {
        height: 80%;
        overflow-y: auto;
        margin-bottom: 10px;
        li {
            display: flex;
            justify-content: space-between;
            font-weight: 300;
            font-size: 13px;
        }
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
