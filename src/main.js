import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSearch, faCaretDown, faMapMarkerAlt, faClock, faEllipsisV, faBell, faSms, faPollH, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faGoogle, faInstagram, faWhatsapp, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faSearch, faCaretDown, faMapMarkerAlt, faClock, faFacebookF, faTwitter, faGoogle, faInstagram, faWhatsapp, faYoutube, faLinkedinIn, faEllipsisV, faBell, faSms, faPollH, faShoppingCart, faUserCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'

import VueAgile from 'vue-agile'

Vue.use(VueAgile)

Vue.config.productionTip = false

new Vue({
  router,
    BadgerAccordion,
    BadgerAccordionItem,
    agile: VueAgile,
  render: h => h(App)
}).$mount('#app')
