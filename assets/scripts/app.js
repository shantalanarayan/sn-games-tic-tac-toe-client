'use strict'

const events = require('./events')
const authEvents = require('./auth/events')

$(() => {
  events.toggleForm()
  authEvents.addHandlers()
})
