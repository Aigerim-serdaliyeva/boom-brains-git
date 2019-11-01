<template>
    <div class="user">
        <div class="user__img">
            <img src="@/assets/img/player.jpg" alt="" />
        </div>
        <div class="user__content">
            <div class="user__name">
                <input 
                    class="user__input"
                    v-if="edit"
                    v-model="user"
                    @blur="edit = false; $emit('update')"
                    @keyup.enter="edit = false; $emit('update')"
                >
                <div v-else>
                    <label class="user__name" @click="edit = true">{{user}}</label> <img @click="userEdit" src="@/assets/img/pen.png" alt="" />
                </div>
            </div>
            <div class="user__data"><span>Email:</span> wtf@hz.com</div>
            <div class="user__data"><span>id:</span> 3646167</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: "Player Name",
            edit: false,
            editedName: null,
        }
    },
    methods: {
        userEdit() {
            this.edit = true
        }
    }
};
</script>

<style lang="scss" scoped>
.user {
    color: #fff;
    display: flex;
    align-items: flex-end;

    &__img {
        width: 152px;
        height: 152px;
        border-radius: 50%;
        border: 5px solid #fff;
        overflow: hidden;
        margin-right: 35px;
    }

    &__input {
        border: 1px solid #fff;
        line-height: inherit;
        color: #fff;
        background: transparent;
        font-weight: 500;
        font-size: 24px;
        margin-bottom: 8px;
        // max-width: 160px;
        width: 100%;
        padding: 0 5px;
    }

    &__name {
        font-weight: 500;
        font-size: 24px;
        margin-bottom: 10px;
        img {
            margin-left: 10px;
        }
    }

    &__content {
        margin-bottom: 10px;
    }

    &__data {
        font-weight: normal;
        font-size: 13px;
        margin-bottom: 10px;
    }
}
</style>
