'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const gameTurn = function () {
  if (store.player === 'X') {
    // when turn changes, display whose turn it is
    store.player = 'O'
  } else {
    store.player = 'X'
  }
}

const gameMove = function (event) {
  event.preventDefault()
  $(event.target).text(store.player)
  gameTurn()
  gameWinner()
}

const onStartGame = function (event) {
  event.preventDefault()
  $('#game-fieldset').show()
  // call the game api to create a new game.
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  api.updateGame(this.id, store.player, false)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
  gameMove(event)
}

const addHandlers = function () {
  $('#start-game').on('click', onStartGame)
  $('.gamebox').one('click', onUpdateGame)
}

const gameWinner = function () {
  // else if top row is a win
  if (gameBox[0] !== '' && gameBox[0] === gameBox[1] && gameBox[0] === gameBox[2]) {
    console.log('You won!')
    // else if middle row is a win
  } else if (gameBox[3] !== '' && gameBox[3] === gameBox[4] && gameBox[3] === gameBox[5]) {
    console.log('You won!')
    // else if bottom row is a win
  } else if (gameBox[6] !== '' && gameBox[6] === gameBox[7] && gameBox[6] === gameBox[8]) {
    console.log('You won!')
    // else if left column is a win
  } else if (gameBox[0] !== '' && gameBox[0] === gameBox[3] && gameBox[0] === gameBox[6]) {
    console.log('You won!')
    // else if right column is a win
  } else if (gameBox[2] !== '' && gameBox[2] === gameBox[5] && gameBox[2] === gameBox[8]) {
    console.log('You won!')
    // else if right diagonal is a win
  } else if (gameBox[2] !== '' && gameBox[2] === gameBox[4] && gameBox[2] === gameBox[6]) {
    console.log('You won!')
    // else if left diagonal is a win
  } else if (gameBox[0] !== '' && gameBox[0] === gameBox[4] && gameBox[0] === gameBox[8]) {
    console.log('You won!')
  } else {
    console.log('Draw')
  }
}
module.exports = {
  addHandlers

}
