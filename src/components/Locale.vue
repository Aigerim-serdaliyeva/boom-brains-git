<template>
    <div class="languages">
        <a @click.prevent="attemptChangeLanguage('ru')" :class="setClass('ru')">ru</a>
        <a @click.prevent="attemptChangeLanguage('en')" :class="setClass('en')">en</a>
        <a @click.prevent="attemptChangeLanguage('kz')" :class="setClass('kz')">kz</a>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters({
            currentLanguage: "language/currentLanguage",
            game: "gamesList/game"
        })
    },
    methods: {
        ...mapActions({
            changeLanguage: "language/changeLanguage",
            changeKey: "language/changeKey",
            fetchInfo: "gamesList/fetchInfo",
        }),
        attemptChangeLanguage(lang) {
            this.changeLanguage(lang);
            this.$i18n.locale = lang;
            this.changeKey();
            this.updateGameName()
        },
        isActive(value) {
            return this.currentLanguage === value;
        },
        setClass(val) {            
            return {
                active: this.isActive(val),
                language: true
            };
        },
        async updateGameName() {
            if(this.game) {
                await this.fetchInfo(this.game)
            }
        }
    }
};
</script>

<style lang="scss">
.languages {        
    margin-bottom: 15px;
}
.language {
    font-weight: 300;
    font-size: 13px;
    text-transform: uppercase;
    padding: 0 5px;
    cursor: pointer;
    &:hover,
    &.active {
        color: #2b7ec1 !important;
        font-weight: 500;
    }
}
</style>
