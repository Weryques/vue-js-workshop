import Vue from 'vue'
import Vuex from 'vuex'

import artist from '@/models/artist'
import album from '@/models/album'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    artist,
    album
  }
})
