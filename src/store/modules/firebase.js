const state = () => ({
  loggedIn: false,
  data: null
})
const getters = {
  isLoggedIn (state) {
    return state.loggedIn
  }
}

const mutations = {
  SET_LOGGED_IN (state, value) {
    state.loggedIn = value
  },
  SET_USER (state, data) {
    state.data = data
  }
}

const actions = {
  fetchUser ({ commit }, user) {
    commit('SET_LOGGED_IN', user !== null)
    if (user) {
      commit('SET_USER', {
        displayName: user.displayName,
        email: user.email
      })
    } else {
      commit('SET_USER', null)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
