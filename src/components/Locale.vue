<template>
    <div class="languages" >
        <a @click.prevent="changeLang('ru')" class="lang">ru</a>
        <a @click.prevent="changeLang('en')" class="lang">en</a>
        <a @click.prevent="changeLang('kz')" class="lang">kz</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        changeLang(lang) {
            this.$root.$i18n.locale = lang 
        }
    }
}
</script>

<style lang="scss">
    .lang {
        font-weight: 300;
        font-size: 13px;
        text-transform: uppercase;
        padding: 0 5px;
        cursor: pointer;
        &:hover, &:active {
            color: #2B7EC1 !important;
            font-weight: 500;
        }
    }
</style>