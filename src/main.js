import Vue from "vue";
import Router from "vue-router";
import App from "./App";
import i18n from "./i18n";
import { router } from "./router";
import Vuelidate from "vuelidate";
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
import "./assets/scss/main.scss";
import moment from "moment";

// Fontawesome
library.add(faVk, faFacebookF, faGoogle, faTwitter);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Error handler
Vue.config.errorHandler = function(err, vm, info) {
    const message = `Error: ${err.toString()}\nInfo: ${info}`;
    if (process.env.NODE_ENV !== "production") {
        console.log(message);
    }

    store.dispatch("error/setMessage", message);
};

// Global Style
import "./assets/scss/main.scss";

// Axios middleware
import "./plugins/axios";

// Vue use
Vue.use(Router);
Vue.use(VueApexCharts);
Vue.use(Vuelidate);
Vue.config.productionTip = false;
Vue.prototype.$moment = moment;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount("#app");
