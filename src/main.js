import Vue from "vue";
import Router from "vue-router";
import App from "./App";
import { router } from "./router";
import { store } from "./store";
import VueApexCharts from "vue-apexcharts";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faVk,
    faFacebookF,
    faGoogle,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Fontawesome
library.add(faVk, faFacebookF, faGoogle, faTwitter);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Global Style
import "./assets/scss/main.scss";

// Axios middleware
import "./plugins/axios";

// Vue use
Vue.use(Router);
Vue.use(VueApexCharts);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
