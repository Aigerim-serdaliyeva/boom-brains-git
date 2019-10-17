export const children = [      
    {
      path: 'week',
      component: () => import('../../subPage/Week.vue')
    },   
    {
      path: 'month',
      component: () => import('../../subPage/Month.vue')
    }, 
    {
      path: 'game-data',
      component: () => import('../../subPage/GameData.vue')
    },
    {
      path: 'rating-friends',
      component: () => import('../../subPage/RatingFriends.vue')
    },
    {
      path: 'radar',
      component: () => import('../../subPage/Radar.vue')
    },
    {
      path: 'age',
      component: () => import('../../subPage/Age.vue')
    },
    {
      path: 'records',
      component: () => import('../../subPage/Records.vue')
    },
    {
      path: 'rating-world',
      component: () => import('../../subPage/RatingWorld.vue')
    },
    {
      path: '',
      component: () => import('../../subPage/ProfileMenu.vue')
    },
  ]