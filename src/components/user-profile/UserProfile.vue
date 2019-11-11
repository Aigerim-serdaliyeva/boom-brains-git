<template>
    <div class="user">
        <div class="user__img">
            <img src="@/assets/img/player.jpg" alt="" />
        </div>
        <div class="user__content">
            <div class="user__name">
                <input
                    class="user__input"
                    v-if="isEditMode"
                    v-model="userName"
                    maxlength="32"
                    ref="userInput"
                    @blur="changeUsername"
                    @keyup.enter="changeUsername"
                />
                <div v-else>
                    <span class="user__name">{{ userName }}</span>
                    <img
                        @click="showEditMode"
                        src="@/assets/img/pen.png"
                        alt=""
                    />
                </div>
            </div>
            <div class="user__data"><span>Email:</span> {{ email }}</div>
            <div class="user__data"><span>id:</span>{{ id }}</div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            userName: "",
            email: "",
            id: null,
            isEditMode: false
        };
    },
    mounted() {
        this.fetchInfo();
    },
    methods: {
        showEditMode() {
            this.isEditMode = true;
            setTimeout(() => {
                if (this.$refs.userInput) {
                    this.$refs.userInput.focus();
                }
            });
        },
        async fetchInfo() {
            try {
                const res = await axios.get("auth/user-info");
                const data = await res.data;
                const { email, username, uid } = data;

                this.userName = username;
                this.email = email;
                this.id = uid;
            } catch (error) {
                throw error;
            }
        },
        async changeUsername() {
            try {
                await axios.post("auth/username", { username: this.userName });
                if (this.isEditMode) {
                    this.isEditMode = false;
                }
            } catch (error) {
                throw error;
            }
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
        font-size: 22px;
        margin-bottom: 8px;
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
