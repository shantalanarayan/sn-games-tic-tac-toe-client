'use strict'

const mainEvents = require('./events')
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

// This is an immediately invoked function that will be executed on page load.
$(() => {
  // Call main event's toggleForm function to toggle between sign-up, sign-in and game-grid, change-password
  mainEvents.toggleForm()

  // Add event handlers for the application.
  authEvents.addHandlers()
  gameEvents.addHandlers()
})
