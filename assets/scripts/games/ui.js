'use strict'

const store = require('../store')
const mainUi = require('../ui')
const gameEngine = require('./gameEngine')
const gameApi = require('./api')

const createGameSuccess = function (data) {
  mainUi.displayMessage('Player ' + store.player + " it's your turn", true)
  // on successful creation of game save the created game in our local store
  store.game = data.game
  gameApi.getGames()
    .then(getGamesSuccess)
    .catch(getGamesFailure)
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
  gameApi.getGames()
    .then(getGamesSuccess)
    .catch(getGamesFailure)
}

const updateGameFailure = function (data) {
  mainUi.displayMessage('Error on update game', false)
}

const getGamesSuccess = function (data) {
  $('#total-games').text(data.games.length)

  let playerXWinCount = 0
  // Loop through each game and count # of times player X won
  for (let i = 0; i < data.games.length; i++) {
    if (gameEngine.isPlayerXWinner(data.games[i])) {
      playerXWinCount++
    }
  }

  $('#games-won').text(playerXWinCount)
}

const getGamesFailure = function (data) {
  mainUi.displayMessage('Error on get games', false)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGamesSuccess,
  getGamesFailure
}
