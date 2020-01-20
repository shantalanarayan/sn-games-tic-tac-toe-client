'use strict'

const store = require('./store')

const toggleForm = function () {
  const authArea = $('#authenticated-area')
  const nonAuthArea = $('#not-authenticated-area')
  const signOut = $('#sign-out')
  const gameField = $('#game-fieldset')

  // If user successfully signed in then store would have user variable set else it will be null
  if (store.user) {
    authArea.show()
    nonAuthArea.hide()
    signOut.show()
  } else {
    authArea.hide()
    nonAuthArea.show()
    signOut.hide()
  }

  // Game field is hidden irrespective of sign-in or sign-out. It is dispalyed on click of Start a new game
  gameField.hide()
}

module.exports = {
  toggleForm
}
