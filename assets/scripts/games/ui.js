'use strict'
const store = require('../store')
const mainUi = require('../ui')

const createGameSuccess = function (data) {
  mainUi.displayMessage('Game created successfully', 'text-success')
  // on successful creation of game save the created game in our local store
  store.game = data.game
}

const createGameFailure = function (data) {
  mainUi.displayMessage('Error on create game', 'text-danger')
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
