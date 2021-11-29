import Vue from 'vue'
import Vuex from 'vuex'
import gameData from './modules/gameData'
import mastermind from '../api/mastermind'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    gameData
  },
  plugins: [mastermind()],
  strict: debug
})
