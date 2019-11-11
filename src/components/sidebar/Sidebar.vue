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
                        >{{ $t('menu.profile') }}</router-link
                    >
                </li>
                <li>
                    <router-link
                        class="sidebar__link"
                        active-class="active"
                        to="/game"
                        >{{ $t('menu.game') }}</router-link
                    >
                </li>
                <li>
                    <router-link
                        class="sidebar__link"
                        active-class="active"
                        to="/courses"
                        >{{ $t('menu.courses') }}</router-link
                    >
                </li>
                <li>
                    <router-link
                        class="sidebar__link"
                        active-class="active"
                        to="/faq"
                        >{{ $t('menu.faq') }}</router-link
                    >
                </li>
                <li>
                    <router-link
                        class="sidebar__link"
                        active-class="active"
                        to="/boom-brains"
                        >{{ $t('menu.boombrains') }}</router-link
                    >
                </li>
            </ul>
        </div>
        <Locale />
    </aside>
</template>

<script>
import Locale from '../Locale.vue'
export default {
    props: {
        text: String
    },
    components: { Locale},
    i18n: {
        messages: {
            ru: {
                menu: {
                    profile: "Ваш профиль",
                    game: "Игры",
                    courses: "Курсы",
                    faq: "FAQ",
                    boombrains: "О BoomBrains"
                },
            },
            en: {
                menu: {
                    profile: "Your profile",
                    game: "Games",
                    courses: "Courses",
                    faq: "FAQ",
                    boombrains: "About BoomBrains"
                },
            },
            kz: {
                menu: {
                    profile: "Сіздің профиліңіз",
                    game: "Ойындар",
                    courses: "Курстар",
                    faq: "FAQ",
                    boombrains: "BoomBrains туралы"
                },
            }
        }
    }
};
</script>

<style lang="scss">
.sidebar {
    max-width: 250px;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 10px;
    padding: 40px 0;
    text-align: center;
    display: flex;
    flex-direction: column;

    &__menu {
        flex-grow: 1;
    }

    &__img {
        margin-bottom: 70px;
    }

    &__link {
        color: #9d9d9d;
        font-size: 18px;
        font-weight: normal;
        display: block;
        padding: 22px 15px;        
        &.active {
            background: #427eb9;
            color: #fff;
        }
        &:hover {
            color: #fff;
            background: rgba(#427eb9, .7);
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

    @media screen and (max-width: 1370px) {
        .sidebar {
            &__link {
                padding: 18px 10px;
            }
        }
    }

    @media screen and (max-width: 1200px) {
        .sidebar {
            max-width: 210px;
            &__link {
                padding: 12px 8px;
                font-size: 16px;
            }
        }
    }
</style>
