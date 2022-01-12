function defaultConnection () {
  return new WebSocket('wss://' + process.env.BACKEND_URL + '/websocket')
}

export default function createWebSocketPlugin (websocket = defaultConnection()) {
  return store => {
    websocket.onopen = function () {
      store.dispatch('gameData/connectionOpened')
    }
    websocket.onclose = function () {
      store.dispatch('gameData/connectionClosed')
    }
    websocket.onerror = function (error) {
      store.dispatch('gameData/connectionError', error)
    }

    websocket.onmessage = function (e) {
      if (typeof e.data === 'string') {
        let json = JSON.parse(e.data)
        if (json.message === 'win') {
          store.dispatch('gameData/gameWon')
        } else if (json.message === 'gameover') {
          store.dispatch('gameData/gameOver')
        } else {
          store.dispatch('gameData/updateGameField', json)
        }
      }
    }

    store.subscribe((mutation, state) => {
      if (state.gameData.connected && mutation.type === 'gameData/NEW_TURN') {
        websocket.send(mutation.payload)
      }
      if (state.gameData.connected && mutation.type === 'gameData/NEW_GAME') {
        websocket.send(mutation.payload)
      }
    })
  }
}
