import Vue from 'vue'
import Vuex from 'vuex'

import artist from '@/models/artist'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    artist
  }
})
