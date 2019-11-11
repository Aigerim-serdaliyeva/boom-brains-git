<template>
    <div class="layout">
        <div class="container">
            <div class="row ">
                <div class="col-lg-3">
                    <Sidebar />
                </div>
                <div class="col-lg-9">
                    <div class="layout__content">
                        <AppHeader />
                        <main class="main">
                            <div :key="key">
                                <transition name="fade" mode="out-in">
                                    <router-view />
                                </transition>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "../sidebar/Sidebar.vue";
import AppHeader from "../header/AppHeader.vue";
import { mapGetters } from "vuex";

export default {
    components: {
        AppHeader,
        Sidebar
    },
    computed: {
        ...mapGetters({
            key: "language/key"
        })
    }
};
</script>

<style lang="scss">
.layout {
    width: 100%;
    padding: 90px 0;
    color: #888888;
    display: flex;
    align-items: center;

    &__content {
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        margin-left: -60px;
    }
}
.main {
    padding: 15px 15px;
}

@media screen and (max-width: 1370px) {
    .layout {
        &__content {
            margin-left: -20px;
        }
    }
    .main {
        padding: 10px;
    }
}

@media screen and (max-width: 1200px) {
    .layout {
        height: auto;
        padding: 40px 0;
    }
}
</style>
