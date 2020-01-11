'use strict'

const displayMessage = (message, cssClass) => {
  $('#message').text(message)
  $('#message').removeClass()
  $('#message').addClass('font-weight-bold')
  $('#message').addClass(cssClass)
}

module.exports = {
  displayMessage
}
