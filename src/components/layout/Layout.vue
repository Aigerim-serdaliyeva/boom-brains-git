<template>
    <div class="layout">
        <div class="container">
            <div class="row align-items-stretch">
                <div class="col-lg-3">
                    <Sidebar />
                </div>
                <div class="col-lg-13">
                    <div class="layout__content">
                        <AppHeader />
                        <main class="main">
                            <router-view />
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

export default {
    components: {
        AppHeader,
        Sidebar
    }
};
</script>

<style lang="scss" scoped>
.layout {
    width: 100%;
    height: 100vh;
    padding: 90px 0;
    color: #888888;

    &__content {
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        margin-left: 25px;
    }

    .main {
        padding: 20px 15px;
    }
}
</style>
