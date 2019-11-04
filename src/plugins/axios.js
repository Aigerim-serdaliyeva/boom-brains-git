import axios from "axios";
import { store } from "../store";
import swal from "sweetalert";

axios.defaults.baseURL =
    process.env.NODE_ENV === "production"
        ? "https://boom-brains-api.kdo.one"
        : "http://localhost:3000";

axios.interceptors.request.use(config => {
    const accessToken = store.getters["auth/accessToken"];

    config.headers["Content-type"] = "application/json";

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
            swal({
                title: "Сессия окончена",
                text: "Вы будете перенаправлены на страницу логина",
                icon: "warning",
                button: "Ок",
                closeModal: true
            }).then(() => {
                store.dispatch("auth/logout", true);
            });
        }
    }
);
