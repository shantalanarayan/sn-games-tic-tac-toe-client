'use strict'

const mainUi = require('../ui')
const store = require('../store')

const keepPlaying = function () {
  if (store.player === 'X') {
    // when turn changes, display whose turn it is
    store.player = 'O'
  } else {
    store.player = 'X'
  }
  // Display alert for next player's turn
  mainUi.displayMessage('Player ' + store.player + " it's your turn", true)
}

const checkForWinner = function () {
  const cells = store.game.cells
  if (cells[0] !== '' && cells[0] === cells[1] && cells[0] === cells[2]) { // Validate row 1
    store.winner = cells[0]
  } else if (cells[3] !== '' && cells[3] === cells[4] && cells[3] === cells[5]) { // Validate row 2
    store.winner = cells[3]
  } else if (cells[6] !== '' && cells[6] === cells[7] && cells[6] === cells[8]) { // Validate row 3
    store.winner = cells[6]
  } else if (cells[0] !== '' && cells[0] === cells[3] && cells[0] === cells[6]) { // Validate col 1
    store.winner = cells[0]
  } else if (cells[1] !== '' && cells[1] === cells[4] && cells[1] === cells[7]) { // Validate col 2
    store.winner = cells[1]
  } else if (cells[2] !== '' && cells[2] === cells[5] && cells[2] === cells[8]) { // Validate col 3
    store.winner = cells[2]
  } else if (cells[0] !== '' && cells[0] === cells[4] && cells[0] === cells[8]) { // Validate dia 1
    store.winner = cells[0]
  } else if (cells[2] !== '' && cells[2] === cells[4] && cells[2] === cells[6]) { // Validate dia 2
    store.winner = cells[2]
  } else if (cells.filter(item => item === '').length === 0) { // Check for draw
    store.isDraw = true
  } else {
    return
  }
  store.gameOver = true
}

const endGame = function () {
  const endGameMessage = store.isDraw ? "It's a tie. Try again!" : 'Congratulations!!! Player ' + store.player + ', you won!'
  mainUi.displayMessage(endGameMessage, true)
  $('.gamebox').off('click')
  $('#game-fieldset').addClass('bg-secondary')
}

module.exports = {
  endGame,
  keepPlaying,
  checkForWinner
}
