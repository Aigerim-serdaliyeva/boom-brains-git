export const routes = [
  {
    path: '/login',
    name: "login",
    component: () => import('./pages/Login.vue')
  },
  {
    path: '/registration',
    name: "registration",
    component: () => import('./pages/Registration.vue')
  },
  {
    path: '/',
    name: "layout",
    component: () => import('./components/Layout.vue'),    
    children: [
      {
        path: '/profile',
        name: "profile",
        component: () => import('./pages/Profile.vue'),
        children: [      
          {
            path: 'week',
            component: () => import('./subPage/Week.vue')
          },   
          {
            path: 'month',
            component: () => import('./subPage/Month.vue')
          }, 
          {
            path: 'game-data',
            component: () => import('./subPage/GameData.vue')
          },
          {
            path: 'rating-friends',
            component: () => import('./subPage/RatingFriends.vue')
          },
          {
            path: 'radar',
            component: () => import('./subPage/Radar.vue')
          },
          {
            path: 'age',
            component: () => import('./subPage/Age.vue')
          },
          {
            path: 'records',
            component: () => import('./subPage/Records.vue')
          },
          {
            path: 'rating-world',
            component: () => import('./subPage/RatingWorld.vue')
          },
          {
            path: '',
            component: () => import('./subPage/ProfileMenu.vue')
          },
        ]
      },
      {
        path: '/game',
        name: "game",
        component: () => import('./pages/Game.vue')
      },
      {
        path: '/courses',
        name: "courses",
        component: () => import('./pages/Courses.vue')
      },
      {
        path: '/faq',
        name: "faq",
        component: () => import('./pages/FAQ.vue')
      },
      {
        path: '/boom-brains',
        name: "boom-brains",
        component: () => import('./pages/BoomBrains.vue')
      }
    ]
  },

]