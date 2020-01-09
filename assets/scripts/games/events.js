'use strict'
let gamePlayer = 'X'

// if (gamePlayer === 'X') {
//   gamePlayer = 'o'
// } else {
//   gamePlayer = 'X'
// }

const gameTurn = function () {
  if (gamePlayer === 'X') {
// when turn changes, display whose turn it is
    gamePlayer = 'O'
  } else {
    gamePlayer = 'X'
  }
}

const gameMove = function (event) {
  event.preventDefault()
  $(event.target).text(gamePlayer)
  gameTurn()
}

const addHandlers = function () {
  $('.gamebox').one('click', gameMove)
}
module.exports = {

  gameTurn,
  addHandlers

}
