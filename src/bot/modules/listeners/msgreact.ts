// Pluto - src/bot/modules/listeners/msgreact.ts

import { Listener } from 'discord-akairo'
import { Message } from 'discord.js'
import config from '../../../configuration/config'

export default class MessageReactionListener extends Listener {
  constructor () {
    super('msgreact', {
      emitter: 'client',
      event: 'message',
      category: 'Reactions'
    })
  }

  async exec (message: Message) {
    if (message.author.id !== config.bot.commands.msgreact.target) return
    if (!config.bot.commands.msgreact.enabled) return
    await message.react(config.bot.commands.msgreact.emote)
  }
}
