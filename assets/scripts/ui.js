'use strict'

const displayMessage = (message, isSuccess) => {
  const cssClass = isSuccess ? 'alert-success' : 'alert-danger'
  $('#message').text(message)
  $('#message').removeClass()
  $('#message').addClass('alert ' + cssClass)
}

module.exports = {
  displayMessage
}
