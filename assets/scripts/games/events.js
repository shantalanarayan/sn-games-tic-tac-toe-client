'use strict'
let gamePlayer = 'X'

// if (gamePlayer === 'X') {
//   gamePlayer = 'o'
// } else {
//   gamePlayer = 'X'
// }

const gameTurn = function() {
  if (gamePlayer === 'X') {
    // when turn changes, display whose turn it is
    gamePlayer = 'O'
  } else {
    gamePlayer = 'X'
  }
}

const gameMove = function(event) {
  event.preventDefault()
  $(event.target).text(gamePlayer)
  gameTurn()
}

const addHandlers = function() {
  $('.gamebox').one('click', gameMove)
}
const gameBox = ['', '', '', '', '', '', '', '', '']

const gameWinner = function() {
    //else if top row is a win
    if (gameBox[0] !== '' && gameBox[0] === gameBox[1] && gameBox[0] === gameBox[2]) {
      console.log "You won!"
      // else if middle row is a win
    } else if (gameBox[3] !== '' && gameBox[3] === gameBox[4] && gameBox[3] === gameBox[5]) {
      console.log "You won!"
      // else if bottom row is a win
    } else if (gameBox[6] !== '' && gameBox[6] === gameBox[7] && gameBox[6] === gameBox[8]) {
      console.log "You won!"
      // else if left column is a win
    } else if (gameBox[0] !== '' && gameBox[0] === gameBox[3] && gameBox[0] === gameBox[6]) {
      console.log "You won!"
      //else if right column is a win
    } else if (gameBox[2] !== '' && gameBox[2] === gameBox[5] && gameBox[2] === gameBox[8]) {
      console.log "You won!"
      // else if right diagonal is a win
    } else if (gameBox[2] !== '' && gameBox[2] === gameBox[4] && gameBox[2] === gameBox[6]) {
      console.log "You won!"
      // else if left diagonal is a win
    } else if (gameBox[0] !== '' && gameBox[0] === gameBox[4] && gameBox[0] === gameBox[8]) {
      console.log "You won!"
    } else {
      console.log "Draw"
    }

  }

    module.exports = {
      addHandlers

    }
