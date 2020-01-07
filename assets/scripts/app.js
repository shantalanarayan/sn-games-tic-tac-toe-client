'use strict'

const events = require('./events')
const authEvents = require('./auth/events');

(() => {
  events.toggleForm()
  authEvents.addHandlers()

  $('#gamebox-1').on('click', (event) => { event.target.textContent = 'X' })
  $('#gamebox-2').on('click', (event) => { event.target.textContent = 'X' })
  $('#gamebox-3').on('click', (event) => { event.target.textContent = 'X' })
  $('#gamebox-4').on('click', (event) => { event.target.textContent = 'X' })
  $('#gamebox-5').on('click', (event) => { event.target.textContent = 'X' })
  $('#gamebox-6').on('click', (event) => { event.target.textContent = 'X' })
  $('#gamebox-7').on('click', (event) => { event.target.textContent = 'X' })
  $('#gamebox-8').on('click', (event) => { event.target.textContent = 'X' })
  $('#gamebox-9').on('click', (event) => { event.target.textContent = 'X' })
})()
