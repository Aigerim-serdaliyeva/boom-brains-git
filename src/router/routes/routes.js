import { layout } from "./layout";

export const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("../../pages/login/Login.vue")
    },
    {
        path: "/forget",
        name: "forget",
        component: () => import("../../pages/forget/Forget.vue")
    },
    {
        path: "/registration",
        name: "registration",
        component: () => import("../../pages/registration/Registration.vue")
    },
    ...layout
];
