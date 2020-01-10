'use strict'

// const events = require('./events')
const authEvents = require('./auth/events')
const events = require('./games/events')

$(() => {
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#gameGrid').hide()
  // events.toggleForm()
  authEvents.addHandlers()
  events.addHandlers()
})
