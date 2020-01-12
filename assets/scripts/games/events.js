'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const gameEngine = require('./gameEngine')

const onStartGame = function (event) {
  event.preventDefault()
  resetGame()
  // call the game api to create a new game.
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const resetGame = function () {
  $('#game-fieldset').show()
  $('.gamebox').one('click', onUpdateGame)
  if (store.gameOver) {
    store.player = 'X'
    store.isDraw = false
    store.gameOver = false
    $('.gamebox').text('')
    $('#game-fieldset').removeClass('bg-secondary')
  }
}

const onUpdateGame = function (event) {
  event.preventDefault()

  // Set the game text to current player's value
  $(this).text(store.player)
  store.game.cells[this.id] = store.player
  gameEngine.checkForWinner()

  api.updateGame(this.id, store.player, store.gameOver)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const addHandlers = function () {
  $('#start-game').on('click', onStartGame)
}

module.exports = {
  addHandlers
}
