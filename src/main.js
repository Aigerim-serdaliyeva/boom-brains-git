import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVk, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faVk, faFacebookF)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes
})

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
