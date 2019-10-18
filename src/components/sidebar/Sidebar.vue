<template>
    <aside class="sidebar">
        <div class="sidebar__img">
            <img src="@/assets/img/logo.png" alt="" />
        </div>
        <div class="sidebar__menu">
            <ul>
                <li>
                    <router-link
                        class="sidebar__link"
                        active-class="active"
                        to="/profile"
                        >Ваш прогресс</router-link
                    >
                </li>
                <li>
                    <router-link
                        class="sidebar__link"
                        active-class="active"
                        to="/game"
                        >Игры</router-link
                    >
                </li>
                <li>
                    <router-link
                        class="sidebar__link"
                        active-class="active"
                        to="/courses"
                        >Курсы</router-link
                    >
                </li>
                <li>
                    <router-link
                        class="sidebar__link"
                        active-class="active"
                        to="/faq"
                        >FAQ</router-link
                    >
                </li>
                <li>
                    <router-link
                        class="sidebar__link"
                        active-class="active"
                        to="/boom-brains"
                        >О BoomBrains</router-link
                    >
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
export default {
    props: {
        text: String
    }
};
</script>

<style lang="scss">
.sidebar {
    max-width: 250px;
    width: 100%;
    background: #fff;
    border-radius: 10px;
    padding: 40px 0;
    text-align: center;

    &__img {
        margin-bottom: 70px;
    }

    &__link {
        color: #9d9d9d;
        font-size: 18px;
        font-weight: normal;
        display: block;
        padding: 22px 15px;
        &:hover,
        &.active {
            background: #427eb9;
            color: #fff;
            text-decoration: none;
        }
    }
}

ul {
    margin: 0;
    padding: 0;
    li {
        list-style: none;
    }
}
</style>
