import * as actions from './actions.js'
import * as mutations from './mutations.js'
import * as getters from './getters.js'

const state = {
  topAlbums: {},
  searchResult: {}
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
