import { Listener } from 'discord-akairo'
import { Message } from 'discord.js'
import { log, loggerType } from '../../../oob_modules/cli/logger'

export default class DebugListener extends Listener {
  constructor () {
    super('debug', {
      emitter: 'client',
      event: 'message',
      category: 'Reactions'
    })
  }

  async exec (message: Message) {
    log(loggerType.DEBUG, 'Message was sent in a channel the bot monitored!')
    console.log(message)
  }
}
