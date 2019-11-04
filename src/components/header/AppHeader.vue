<template>
    <header class="header">
        <div class="header__content">
            <UserProfile />
            <a href="/profile" @click="logout" class="header__exit">
                <svg class="header__exit__img" width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.43751 31H21.0513C23.3056 31 25.1353 29.0978 25.1353 26.7727V4.2268C25.1353 1.90171 23.3056 0 21.0513 0H7.43751C5.18515 0 3.35156 1.90171 3.35156 4.2268V9.86317H6.07555V4.2268C6.07555 3.45231 6.68724 2.81725 7.43751 2.81725H21.0513C21.8035 2.81725 22.4133 3.45231 22.4133 4.2268V26.7727C22.4133 27.5476 21.8035 28.182 21.0513 28.182H7.43751C6.68724 28.182 6.07555 27.5476 6.07555 26.7727V21.1364H3.35156V26.7727C3.35156 29.0978 5.18515 31 7.43751 31Z" fill="white"/>
                    <path d="M18.4324 15.5067L12.7373 10.054V12.868H0V18.2534H12.7373V20.9459L18.4324 15.5067Z" fill="white"/>
                </svg>
                <div class="header__exit__text">Выход</div>
            </a>            
        </div>
    </header>
</template>

<script>
import UserProfile from "../user-profile/UserProfile.vue";
import { mapActions } from "vuex";

export default {
    components: { UserProfile },
    methods: {
        ...mapActions({
            logout: "auth/logout"
        })
    }
};
</script>

<style lang="scss" scoped>
.header {
    background-image: url("~@/assets/img/header-back.jpg");
    padding: 22px 30px 22px 40px;

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__exit {
        text-align: center;
        color: #ffffff; 
        cursor: pointer;        
        font-weight: normal;
        font-size: 13px;
        svg path {
            fill:inherit;
            stroke:inherit;
            stroke-width:inherit;
        }
        &__text {            
            transition: all .5s ease;
        }
        &__img {
            margin-bottom: 5px;
            transition: all .5s ease;
            fill: #ffffff;      
        }
        &:hover {
            .header__exit__text {
                color: red;
            }
            .header__exit__img {
                fill:red;
            }
        }
    }
}

// .icon-youtube:hover { color: red; fill: red; } 
@media screen and (max-width: 1370px) {
    .header {
        padding: 15px 25px;
    }
}
</style>
