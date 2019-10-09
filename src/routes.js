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
        component: () => import('./pages/Progress.vue')
      },
      {
        path: '/groups',
        name: "groups",
        component: () => import('./pages/Groups.vue')
      },
      {
        path: '/records',
        name: "records",
        component: () => import('./pages/Records.vue')
      },
      {
        path: '/applications',
        name: "applications",
        component: () => import('./pages/Applications.vue')
      }
    ]
  },

]