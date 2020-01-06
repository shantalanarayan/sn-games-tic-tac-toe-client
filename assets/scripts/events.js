'use strict'

const getFormFields = require('../../lib/get-form-fields')
// Using your knowledge of jQuery write a function so that when "save changes" is clicked the input in the input field is console logged in Chrome.

const onSubmitForm = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log(data.form)
  $('#myModal').modal('hide')
}

module.exports = {
  onSubmitForm
}
