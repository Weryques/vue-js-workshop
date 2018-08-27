import * as actions from './actions.js'
import * as getters from './getters.js'
import * as mutations from './mutations.js'

const state = {
  albumInfo: {}
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
