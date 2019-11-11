import Router from "vue-router";
import { routes } from "./routes";
import { store } from "../store";

export const router = new Router({
    linkActiveClass: "active",
    mode: "history",
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [...routes]
});

router.beforeEach((to, from, next) => {
    const accessToken = store.getters["auth/accessToken"];

    if (
        to.path === "/login" ||
        to.path === "/registration" ||
        to.path === "/forget"
    ) {
        return accessToken ? next("/profile") : next();
    }

    return accessToken ? next() : next("/login");
});
