'use strict'

const store = require('./store')

const getFormFields = require('../../lib/get-form-fields')
// Using your knowledge of jQuery write a function so that when "save changes" is clicked the input in the input field is console logged in Chrome.

const onSubmitForm = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log(data.form)
  $('#myModal').modal('hide')
}

const toggleForm = function () {
  const signInForm = $('#sign-in')
  const signUpForm = $('#sign-up')
  const signOutForm = $('#sign-out')
  const changePasswordForm = $('#change-password')
  const gameGrid = $('#game-grid')

  if (store.user) {
    // user is logged in
    signInForm.hide()
    signUpForm.hide()
    signOutForm.show()
    changePasswordForm.show()
    gameGrid.show()
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
  onSubmitForm,
  toggleForm
}
