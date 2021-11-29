const state = () => ({
  connected: false,
  win: false,
  gameOver: false,
  gameField: [
    {
      attempt: [{color: ' '}, {color: ' '}, {color: ' '}, {color: ' '}],
      correctColors: 0,
      correctPositions: 0
    },
    {
      attempt: [{color: ' '}, {color: ' '}, {color: ' '}, {color: ' '}],
      correctColors: 0,
      correctPositions: 0
    },
    {
      attempt: [{color: ' '}, {color: ' '}, {color: ' '}, {color: ' '}],
      correctColors: 0,
      correctPositions: 0
    },
    {
      attempt: [{color: ' '}, {color: ' '}, {color: ' '}, {color: ' '}],
      correctColors: 0,
      correctPositions: 0
    },
    {
      attempt: [{color: ' '}, {color: ' '}, {color: ' '}, {color: ' '}],
      correctColors: 0,
      correctPositions: 0
    },
    {
      attempt: [{color: ' '}, {color: ' '}, {color: ' '}, {color: ' '}],
      correctColors: 0,
      correctPositions: 0
    },
    {
      attempt: [{color: ' '}, {color: ' '}, {color: ' '}, {color: ' '}],
      correctColors: 0,
      correctPositions: 0
    },
    {
      attempt: [{color: ' '}, {color: ' '}, {color: ' '}, {color: ' '}],
      correctColors: 0,
      correctPositions: 0
    },
    {
      attempt: [{color: ' '}, {color: ' '}, {color: ' '}, {color: ' '}],
      correctColors: 0,
      correctPositions: 0
    },
    {
      attempt: [{color: ' '}, {color: ' '}, {color: ' '}, {color: ' '}],
      correctColors: 0,
      correctPositions: 0
    }]
})

// getters
const getters = {
  isConnected: state => state.connected,
  getGamefield: (state) => {
    return state.gameField
  }
}

// actions (asynchronous stuff)
const actions = {
  connectionOpened ({ commit }) {
    commit('SET_CONNECTION', true)
  },
  connectionClosed ({ commit }) {
    commit('SET_CONNECTION', false)
  },
  connectionError ({ commit }, error) {
    console.log(error)
  },
  newTurn ({ commit, state }, input) {
    commit('NEW_TURN', input)
  },
  updateGameField ({ commit, state }, gameData) {
    commit('SET_GAMEFIELD', gameData.attempts)
  }
}

// mutations (synchronous stuff)
const mutations = {
  SET_CONNECTION (state, message) {
    state.connected = message
  },
  SET_GAMEFIELD (state, newGamefield) {
    state.gameField = newGamefield
  },
  // eslint-disable-next-line no-unused-vars
  NEW_TURN (state, message) {}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
