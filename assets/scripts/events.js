'use strict'

const store = require('./store')

const toggleForm = function () {
  const signInForm = $('#sign-in')
  const signUpForm = $('#sign-up')
  const signOutForm = $('#sign-out')
  const changePasswordForm = $('#change-password')
  const gameGrid = $('#game-grid')
  const gameField = $('#game-fieldset')

  if (store.user) {
    // user is logged in
    signInForm.hide()
    signUpForm.hide()
    signOutForm.show()
    changePasswordForm.show()
    gameGrid.show()
    gameField.hide()
  } else {
    // user is logged out
    signInForm.show()
    signUpForm.show()
    signOutForm.hide()
    changePasswordForm.hide()
    gameGrid.hide()
  }
}

module.exports = {
  toggleForm
}
