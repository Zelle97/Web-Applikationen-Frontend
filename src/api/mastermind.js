function defaultConnection () {
  return new WebSocket('ws://localhost:9000/websocket')
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
          if (confirm('You Won!')) {
            window.location.reload()
          }
        } else if (json.message === 'gameover') {
          if (confirm('Game Over!')) {
            window.location.reload()
          }
        } else {
          store.dispatch('gameData/updateGameField', json)
        }
      }
    }

    store.subscribe((mutation, state) => {
      if (state.gameData.connected && mutation.type === 'gameData/NEW_TURN') {
        websocket.send(mutation.payload)
      }
    })
  }
}
