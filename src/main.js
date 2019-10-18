import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store";
import { routes } from "./routes";
import VueApexCharts from "vue-apexcharts";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faVk,
    faFacebookF,
    faGoogle,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./assets/scss/main.scss";

library.add(faVk, faFacebookF, faGoogle, faTwitter);

Vue.component("font-awesome-icon", FontAwesomeIcon);

const router = new VueRouter({
    linkActiveClass: "active",
    mode: "history",
    routes
});

Vue.use(VueRouter);
Vue.use(VueApexCharts);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
