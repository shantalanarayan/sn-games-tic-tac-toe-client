'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const gameEngine = require('./gameEngine')

const onStartGame = function (event) {
  event.preventDefault()

  // Display the game fieldset
  $('#game-fieldset').show()

  // Add clcik handler to each box in the game field.
  $('.gamebox').one('click', onUpdateGame)

  // Execute reset game to start fresh everytime.
  resetGame()

  // call the game api to create a new game.
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const resetGame = function () {
  // clear text from game box
  $('.gamebox').text('')

  // reset store data
  store.player = 'X'
  store.isDraw = false
  store.gameOver = false

  // remove the greyed out background from game fieldset
  $('#game-fieldset').removeClass('bg-secondary')

}

const onUpdateGame = function (event) {
  event.preventDefault()

  // Set the clicked box text to current player's value; i.e., X or O
  $(this).text(store.player)

  // Update the local game's array to store the selected box for checkForWinner function
  store.game.cells[this.id] = store.player

  // Execute checkForWinner before calling api to validate if game is over.
  gameEngine.checkForWinner()

  // Call api to update the game on server, by passing in the current game state
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
