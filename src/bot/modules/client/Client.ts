// PlutoCore - bot/oob_modules/client/Client.ts
// Written by Sam - https://quinnlane.dev/

import { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } from 'discord-akairo'
import config from '../../../configuration/config'

export class CustomClient extends AkairoClient {
  commandHandler: CommandHandler
  inhibitorHandler: InhibitorHandler
  listenerHandler: ListenerHandler

  constructor () {
    // Setup custom client
    super({
      // Options for Akairo
      ownerID: config.bot.ownerid
    }, {
      // Options for Discord
      disableMentions: 'everyone'
    })

    // Command Handler
    this.commandHandler = new CommandHandler(this, {
      directory: `${__dirname}/../commands`,
      prefix: config.bot.prefix,
      allowMention: true
    })
    this.commandHandler.reloadAll()

    // Inhibitor Handler
    this.inhibitorHandler = new InhibitorHandler(this, {
      directory: `${__dirname}/../inhibitors`
    })

    this.commandHandler.useInhibitorHandler(this.inhibitorHandler)
    this.inhibitorHandler.reloadAll()

    // Listener Handler
    this.listenerHandler = new ListenerHandler(this, {
      directory: `${__dirname}/../listeners`
    })

    this.commandHandler.useListenerHandler(this.listenerHandler)
    this.listenerHandler.reloadAll()
  }
}
