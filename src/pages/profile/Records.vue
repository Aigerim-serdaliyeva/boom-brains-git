<template>
    <div>
        <h2
            class="widget__content__title"
            v-for="game in records"
            :key="game._id"
        >
            <span>{{ game.name }}</span> <span>{{ game.record }}</span>
        </h2>
    </div>
</template>

<script>
import axios from "axios";
import SubPage from "../../components/sub-page/SubPage.vue";

export default {
    data() {
        return {
            records: []
        };
    },
    mounted() {
        this.fetchRecords();
    },
    components: { SubPage },
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
        }
    }
};
</script>

<style lang="scss">
</style>
