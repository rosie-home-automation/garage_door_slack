'use strict'

const Slack = require('node-slackr')

class SlackBot {
  constructor(options, door) {
    this.url = options.url
    this.options = options.options
    this.username = options.username || 'GarageBot'

    this.slack = new Slack(this.url, this.options)
    this.setupHandlers(door)
  }
  sendMessage(message) {
    this.slack.notify({
      text: message,
      username: this.username
    })
  }
  setupHandlers(door) {
    door.on('open', () => this.sendMessage('Door open'))
    door.on('closed', () => this.sendMessage('Door closed'))
  }
}

module.exports = SlackBot
