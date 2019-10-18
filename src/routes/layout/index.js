import { profileChildren } from "./profile-children";

export const layout = [
    {
        path: "/",
        name: "layout",
        component: () => import("../../components/layout/Layout.vue"),
        children: [
            {
                path: "/profile",
                component: () => import("../../pages/Profile.vue"),
                children: profileChildren
            },
            {
                path: "/game",
                name: "game",
                component: () => import("../../pages/Game.vue")
            },
            {
                path: "/courses",
                name: "courses",
                component: () => import("../../pages/Courses.vue")
            },
            {
                path: "/faq",
                name: "faq",
                component: () => import("../../pages/FAQ.vue")
            },
            {
                path: "/boom-brains",
                name: "boom-brains",
                component: () => import("../../pages/BoomBrains.vue")
            }
        ]
    }
];
