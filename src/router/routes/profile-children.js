export const profileChildren = [
    {
        path: "week",
        component: () => import("../../pages/profile/week/Week.vue")
    },
    {
        path: "month",
        component: () => import("../../pages/profile/month/Month.vue")
    },
    {
        path: "game-data",
        component: () => import("../../pages/profile/game-data/GameData.vue")
    },
    {
        path: "rating-friends",
        component: () => import("../../pages/profile/RatingFriends.vue")
    },
    {
        path: "radar",
        component: () => import("../../pages/profile/Radar.vue")
    },
    {
        path: "age",
        component: () => import("../../pages/profile/age/Age.vue")
    },
    {
        path: "records",
        component: () => import("../../pages/profile/Records.vue")
    },
    {
        path: "rating-world",
        component: () => import("../../pages/profile/RatingWorld.vue")
    },
    {
        path: "",
        component: () => import("../../pages/profile/ProfileMenu.vue")
    }
];
