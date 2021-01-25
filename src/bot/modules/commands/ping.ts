import { Command } from 'discord-akairo'
import { genEmbed } from '../utilities/EmbedGenerator'

class PingCommand extends Command {
  constructor () {
    super('ping', {
      aliases: ['ping']
    })
  }

  exec (message): any {
    return message.reply(genEmbed({
      title: 'Test',
      author: {
        name: 'asd'
      }
    }))
  }
}

export default PingCommand
