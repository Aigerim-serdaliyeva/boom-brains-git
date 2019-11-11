import axios from "axios";
import { store } from "../store";
import swal from "sweetalert";

axios.defaults.baseURL =
    process.env.NODE_ENV === "production"
        ? "https://boom-brains-api.kdo.one"
        : "http://localhost:3000";

axios.interceptors.request.use(config => {
    const accessToken = store.getters["auth/accessToken"];
    const language = store.getters["language/currentLanguage"];

    config.headers["Content-type"] = "application/json";

    if (language) {
        config.headers["App-Language"] = language;
    }

    if (accessToken) {
        config.headers.Authorization = "Bearer " + accessToken;
        config.headers.Accept = "application/json";
    } else {
        config.headers.Authorization = null;
        config.headers["Secret-key"] = "BoomBrains";
    }

    return config;
});

axios.interceptors.response.use(
    res => res,
    err => {
        if (401 === err.response.status) {
            store.dispatch("auth/logout", true);
        }
    }
);
