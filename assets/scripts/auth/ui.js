'use strict'

const store = require('../store')
const mainEvents = require('../events')
const mainUi = require('../ui')

const signUpSuccess = function (data) {
  mainUi.displayMessage('Signed up successfully', true)
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  mainUi.displayMessage('Error on sign up', false)
}

const signInSuccess = function (data) {
  mainUi.displayMessage('Signed in successfully', true)
  $('form').trigger('reset')
  // Set the user returned from the api call to a user variable in our local store.
  store.user = data.user
  // call toggleForm, after setting user in store, to show game grid and change password.
  mainEvents.toggleForm()
}

const signInFailure = function (data) {
  mainUi.displayMessage('Error on sign in', false)
}

const signOutSuccess = function () {
  mainUi.displayMessage('Signed out successfully', true)
  $('form').trigger('reset')
  // set the user to null as the user has signed out successfully.
  store.user = null
  // call toggleForm, after setting user to null, to show sign-up and sign-in.
  mainEvents.toggleForm()
}

const signOutFailure = function (data) {
  mainUi.displayMessage('Error on sign out', false)
}

const changePasswordSuccess = function () {
  mainUi.displayMessage('Changed password successfully', true)
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  mainUi.displayMessage('Error on change password', false)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
