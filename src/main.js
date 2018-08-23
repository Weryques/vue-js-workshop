import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import VueMasonry from 'vue-masonry-css'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueMasonry)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
