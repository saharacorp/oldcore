// PlutoCore - bot/pluto.ts
// Written by Sam - https://quinnlane.dev/

import { CustomClient } from './modules/client/Client.js'
import config from '../configuration/config.js'
import { log, loggerType } from '../oob_modules/cli/logger'

const client = new CustomClient()

client.on('ready', () => {
  // @ts-expect-error
  log(loggerType.OK, `Logged in as ${client.user.tag}`)
  // @ts-expect-error
  switch (client.user.bot) {
    case true:
      log(loggerType.EXTENSION, 'This user is a bot user')
      break
    case false:
      log(loggerType.EXTENSION, 'This user is not a bot user')
      break
    default:
      log(loggerType.EXTENSION, 'Couldn\'t tell whether this user is a bot user or not')
      break
  }
  // @ts-expect-error
  client.user.setPresence(config.bot.personalization.presenceData)
})

client.on('message', message => {
  log(loggerType.DEBUG, 'Message was sent in a channel the bot monitored!')
  console.log(message)
})

export default function start (): void {
  if (config.devOptions.canary) {
    void client.login(config.bot.canaryToken)
  } else {
    void client.login(config.bot.token)
  }
}

export {
  client
}
