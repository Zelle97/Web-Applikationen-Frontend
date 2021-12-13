const state = () => ({
  connected: false,
  win: false,
  gameOver: false,
  colorMapArray: ['bg-color-brown', 'bg-color-red', 'bg-color-green', 'bg-color-yellow', 'bg-color-blue', 'bg-color-black', 'bg-color-white', 'bg-color-orange'],
  inputColor: [],
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
  },
  getWin: (state) => {
    return state.win
  },
  getGameOver: (state) => {
    return state.gameOver
  },
  getColorMapArray: (state) => {
    return state.colorMapArray
  }
}

// actions (asynchronous stuff)
const actions = {
  addInputColor ({ commit }, data) {
    commit('SET_INPUTCOLOR', data)
  },
  gameWon ({ commit }) {
    commit('SET_WIN', true)
  },
  gameOver ({ commit }) {
    commit('SET_GAMEOVER', true)
  },
  resetGame ({ commit }) {
    commit('RESET_GAME')
    commit('NEW_GAME', 'easy')
  },
  connectionOpened ({ commit }) {
    commit('SET_CONNECTION', true)
  },
  connectionClosed ({ commit }) {
    commit('SET_CONNECTION', false)
  },
  connectionError ({ commit }, error) {
    console.log(error)
  },
  newTurn ({ commit, state }) {
    let pickedColors = []
    pickedColors.push(state.inputColor[0].match(new RegExp('(?:bg-color-)(.*)'))[1])
    pickedColors.push(state.inputColor[1].match(new RegExp('(?:bg-color-)(.*)'))[1])
    pickedColors.push(state.inputColor[2].match(new RegExp('(?:bg-color-)(.*)'))[1])
    pickedColors.push(state.inputColor[3].match(new RegExp('(?:bg-color-)(.*)'))[1])

    let inputString = pickedColors[0].concat(' ', pickedColors[1], ' ', pickedColors[2], ' ', pickedColors[3])
    commit('NEW_TURN', inputString)
  },
  updateGameField ({ commit, state }, gameData) {
    commit('SET_GAMEFIELD', gameData.attempts)
  }
}

// mutations (synchronous stuff)
const mutations = {
  SET_INPUTCOLOR (state, data) {
    state.inputColor[data.index] = data.value
  },
  SET_CONNECTION (state, message) {
    state.connected = message
  },
  SET_WIN (state, message) {
    state.gameOver = !message
    state.win = message
  },
  SET_GAMEOVER (state, message) {
    state.win = !message
    state.gameOver = message
  },
  SET_GAMEFIELD (state, newGamefield) {
    state.gameField = newGamefield
  },
  RESET_GAME (state) {
    // TODO
    state.win = false
    state.gameOver = false
    state.gameField = [
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
  },
  // eslint-disable-next-line no-unused-vars
  NEW_TURN (state, message) {},
  // eslint-disable-next-line no-unused-vars
  NEW_GAME (state, difficulty) {}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
