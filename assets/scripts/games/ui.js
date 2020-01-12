'use strict'

const store = require('../store')
const mainUi = require('../ui')
const gameEngine = require('./gameEngine')

const createGameSuccess = function (data) {
  mainUi.displayMessage('Player ' + store.player + " it's your turn", true)
  // on successful creation of game save the created game in our local store
  store.game = data.game
}

const createGameFailure = function (data) {
  mainUi.displayMessage('Error on create game', false)
}

const updateGameSuccess = function (data) {
  if (data.game.over) {
    gameEngine.endGame()
  } else {
    store.game = data.game
    gameEngine.keepPlaying()
  }
}

const updateGameFailure = function (data) {
  mainUi.displayMessage('Error on update game', false)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure
}
