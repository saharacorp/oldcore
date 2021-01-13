import { Command } from 'discord-akairo'

class PingCommand extends Command {
  constructor () {
    super('ping', {
      aliases: ['ping']
    })
  }

  exec (message): any {
    return message.reply('Pong!')
  }
}

export default PingCommand
