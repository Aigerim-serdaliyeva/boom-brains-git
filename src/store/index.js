import Vue from "vue";
import Vuex from "vuex";
import { auth } from "./auth";
import { error } from "./error";
import { language } from "./language";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        auth,
        error,
        language
    }
});
