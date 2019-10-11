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
        path: '/progress',
        name: "progress",
        component: () => import('./pages/Progress.vue'),
        children: [      
          {
            path: '/week',
            component: () => import('./statistics/Week.vue')
          },   
          {
            path: '/month',
            component: () => import('./statistics/Month.vue')
          }, 
          {
            path: '/game-data',
            component: () => import('./statistics/GameData.vue')
          },
          {
            path: '/rating-friends',
            component: () => import('./statistics/RatingFriends.vue')
          },
          {
            path: '/radar',
            component: () => import('./statistics/Radar.vue')
          },
          {
            path: '/age',
            component: () => import('./statistics/Age.vue')
          },
          {
            path: '/records',
            component: () => import('./statistics/Records.vue')
          },
          {
            path: '/rating-world',
            component: () => import('./statistics/RatingWorld.vue')
          },
          {
            path: '',
            component: () => import('./statistics/ProgressMenu.vue')
          },
        ]
      },
      {
        path: '/groups',
        name: "groups",
        component: () => import('./pages/Groups.vue')
      },
      {
        path: '/applications',
        name: "applications",
        component: () => import('./pages/Applications.vue')
      }
    ]
  },

]