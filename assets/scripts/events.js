'use strict'

const store = require('./store')

const toggleForm = function () {
  const signInForm = $('#sign-in')
  const signUpForm = $('#sign-up')
  const signOutForm = $('#sign-out')
  const changePasswordForm = $('#change-password')
  const gameGrid = $('#game-grid')
  const gameField = $('#game-fieldset')
  const signInTab = $('#sign-in-tab')

  if (store.user) {
    // user is logged in
    signInForm.hide()
    signUpForm.hide()
    gameField.hide()
    signInTab.hide()
    signOutForm.show()
    changePasswordForm.show()
    gameGrid.show()
  } else {
    // user is logged out
    signInForm.show()
    signUpForm.show()
    signInTab.show()
    signOutForm.hide()
    changePasswordForm.hide()
    gameGrid.hide()
  }
}

module.exports = {
  toggleForm
}
