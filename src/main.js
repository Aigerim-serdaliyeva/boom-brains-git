import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import {routes} from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVk, faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faVk, faFacebookF, faGoogle, faTwitter)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes
})

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
