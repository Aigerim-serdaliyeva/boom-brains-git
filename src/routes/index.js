import { layout } from './layout'

export const routes = [
    {
      path: '/login',
      name: "login",
      component: () => import('../pages/Login.vue')
    },
    {
      path: '/registration',
      name: "registration",
      component: () => import('../pages/Registration.vue')
    },
    ...layout
  ]  