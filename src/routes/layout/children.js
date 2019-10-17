export const children = [      
    {
      path: 'week',
      component: () => import('../../pages/profile/Week.vue')
    },   
    {
      path: 'month',
      component: () => import('../../pages/profile/Month.vue')
    }, 
    {
      path: 'game-data',
      component: () => import('../../pages/profile/GameData.vue')
    },
    {
      path: 'rating-friends',
      component: () => import('../../pages/profile/RatingFriends.vue')
    },
    {
      path: 'radar',
      component: () => import('../../pages/profile/Radar.vue')
    },
    {
      path: 'age',
      component: () => import('../../pages/profile/Age.vue')
    },
    {
      path: 'records',
      component: () => import('../../pages/profile/Records.vue')
    },
    {
      path: 'rating-world',
      component: () => import('../../pages/profile/RatingWorld.vue')
    },
    {
      path: '',
      component: () => import('../../pages/profile/ProfileMenu.vue')
    },
  ]