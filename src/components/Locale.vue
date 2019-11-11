<template>
    <div class="languages" >
        <a @click.prevent="changeLang('ru'), active = 'ru'" :class="{active: isActive('ru')}" class="lang">ru</a>
        <a @click.prevent="changeLang('en'), active = 'en'" :class="{active: isActive('en')}" class="lang">en</a>
        <a @click.prevent="changeLang('kz'), active = 'kz'" :class="{active: isActive('kz')}" class="lang">kz</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: "ru"
        }
    },
    methods: {
        changeLang(lang) {
            this.$root.$i18n.locale = lang 
        },
        isActive(value) {
            return this.active === value
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
        &:hover, &.active {
            color: #2B7EC1 !important;
            font-weight: 500;
        }
    }
</style>