'use strict'
const store = require('../store')
const mainUi = require('../ui')

const createGameSuccess = function (data) {
  mainUi.displayMessage('Game created successfully', true)
  // on successful creation of game save the created game in our local store
  store.game = data.game
}

const createGameFailure = function (data) {
  mainUi.displayMessage('Error on create game', false)
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
