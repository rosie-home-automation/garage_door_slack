'use strict'

const SlackBot = require('./lib/slack_bot')

let register = function(server, options, next) {
  function getDoor() {
    if (!server.plugins['garage_door_core']) return null
    return server.plugins['garage_door_core']['door']
  }
  let door = getDoor(server)
  let slackBot = new SlackBot(options, door)
  server.expose('SlackBot', slackBot)

  return next()
}

register.attributes = {
  pkg: require('./package.json')
}

module.exports = register
