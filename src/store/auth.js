import { router } from "../router";
import axios from "axios";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

export const auth = {
    namespaced: true,
    state: {
        accessToken: localStorage.getItem("access_token")
    },
    getters: {
        accessToken: ({ accessToken }) => {
            if (accessToken === "undefined" || accessToken === null) {
                return false;
            }
            return accessToken;
        }
    },
    mutations: {
        [LOGIN_SUCCESS](state, token) {
            state.accessToken = token;
        },
        [LOGOUT](state) {
            state.accessToken = null;
        }
    },
    actions: {
        async login({ commit }, credentials) {
            try {
                const res = await axios.post("/auth/login", credentials);
                const data = await res.data;

                const { token, status } = data;

                if (status === "rejected") {
                    return data;
                }

                localStorage.setItem("access_token", token);

                commit(LOGIN_SUCCESS, token);
                router.push("/profile");
            } catch (err) {
                throw err;
            }
        },
        async register({ commit }, credentials) {
            try {
                const res = await axios.post("/auth/register", credentials);
                const data = await res.data;

                const { token, status } = data;

                if (status === "rejected") {
                    return data;
                }

                localStorage.setItem("access_token", token);
                commit(LOGIN_SUCCESS, token);
                router.push("/profile");
            } catch (err) {
                throw err;
            }
        },
        async logout({ commit }) {
            try {
                commit(LOGOUT);
                localStorage.removeItem("access_token");
            } catch (err) {
                throw err;
            }
        }
    }
};
